<template>

	<div class="container">
		<div>
			<p>Select your faculty:</p>
			<b-form-select v-model="userFaculty" :options="faculties" size="sm"></b-form-select>
			<div v-if="allowProgramSelection">
				<p>Select your program:</p>
				<b-form-select v-model="userProgram" :options="programs"></b-form-select>
				<p>Select your enrollment year</p>
				<b-form-select v-model="userYear" :options="academicYears"></b-form-select> 
			</div>
			<div v-if="allowCourseSelection">
				<p>
					Enter what courses you have taken and which category they fall in
				</p>
				<b-input-group size="sm">
					<b-form-input v-model="userCourse" placeholder="course name" list="availCoursesList"></b-form-input> 
					<datalist id="availCoursesList">
						<option v-for="(data, index) in availCourses" :key="index">{{ data.code }} - {{ data.title }}</option>
					</datalist>
					<span style="margin: 0 1em">falls in</span> 
					<b-form-select v-model="userCourseGroup" :options="courseGroups"></b-form-select>
				</b-input-group>
				<div>
					<label style="font-size: 10px; float: center;">
						Please visit <a href="https://ugradcalendar.uwaterloo.ca/" target="_blank">https://ugradcalendar.uwaterloo.ca/</a> for more info on course categories					
					</label>
				</div>
				<b-button style="float right;" variant="success" @click="addCourse">Add</b-button> 
			</div>
		</div>
		<div v-if="userCourses.length > 0">
			<hr />
			<p>You have entered the following courses and their category</p>
			<li v-for="(userCourse, index) in userCourses" :key="index">
				<span>{{ userCourse.name }}</span> is in
				<span>{{ userCourse.group }}</span>
				<b-button class="removeCourseButton" variant="danger" @click="removeCourse(index)">X</b-button>
			</li>
		</div>
		<div v-if="showResult">
			<hr />
			<div v-if="coursesNeedToBeFulfilled.length > 0">
				<h3><u>Results</u></h3>
				<p>
					You still need to fulfill the following categories to graduate:
				</p>
				<li v-for="(record, index) in coursesNeedToBeFulfilled" :key="index">{{ record.total }} course(s) from {{ record.name }}</li>
			</div>
			<!-- if no more courses need to be fulfilled -->
			<div v-if="coursesNeedToBeFulfilled.length <= 0">
				<p>
					Congratulations! You have satisfied all required courses to graduate.
				</p>
			</div>
			<PieChart :chartData="pieChartData" :chartTitle="pieChartTitle" style="width: 200px; display: inline-block" />
		</div>
	</div>
</template>

<script>
import PieChart from '@/components/PieChart.vue';
const { FacultyHandler, ProgramHandler, CourseHandler } = require('@/Backend');
const { AcademicYears } = require('@/Backend/Database');
const { CacheService } = require('@/Backend/Service');
const Enums = require('@/Backend/Enums');
export default {
	name: 'CreditTrackerPage',
	components: {
		PieChart
	},
	data() {
		return {
			userFaculty: '',
			userYear: '',
			userProgram: '',
			faculties: [],
			programs: [],
			courseGroups: [],
			academicYears: {},
			availCourses: [],
			userCourses: [],
			userCourse: '',
			userCourseGroup: '',
			coursesNeedToBeFulfilled: [],
			pieGraphs: [],
			pieChartData: {},
			pieChartTitle: '% of electives taken',
			showResult: false,
			allowCourseSelection: false,
			allowProgramSelection: false,
			raw: 'Greetings from https://ugradcalendar.uwaterloo.ca/'
		};
	},
	methods: {
		addCourse: function() {
			const newCourse = this.userCourse;
			const newCourseGroup = this.userCourseGroup;
			if(newCourse == '' || newCourseGroup == ''){
				alert('course or group cannot be empty');
				return;
			} 
			for (const userCourse of this.userCourses) {
				if (userCourse.name == newCourse && userCourse.group == newCourseGroup) {
					alert(`the pair ${newCourse} in ${newCourseGroup} has already been added`);
					return;
				}
			}
			this.userCourses.push({
				name: this.userCourse,
				group: this.userCourseGroup
			});
			this.userCourse = '';
			this.userCourseGroup = '';
			this.calculate();
			CacheService.set('userCourses', JSON.stringify(this.userCourses));
		},
		removeCourse: function(index) {
			this.userCourses.splice(index, 1);
			this.calculate();
		},
		calculate: async function() {
			// calculate the diff
			const requiredCourseGroups = await CourseHandler.getCourseGroupsByProgram(this.userProgram, this.userYear);
			console.log('required course groups', requiredCourseGroups);
			let diffCourseGroups = {};
			requiredCourseGroups.forEach(courseGroup => {
				if (courseGroup.name == Enums.CourseGroupEnum.FREE_RANGE) {
					if (diffCourseGroups[Enums.CourseGroupEnum.FREE_RANGE]) {
						diffCourseGroups[Enums.CourseGroupEnum.FREE_RANGE].push(courseGroup);
					} else {
						diffCourseGroups[Enums.CourseGroupEnum.FREE_RANGE] = [courseGroup];
					}
				} else {
					diffCourseGroups[courseGroup.name] = courseGroup.total;
				}
			});

			console.log('diff course groups:', diffCourseGroups);

			this.userCourses.forEach(userCourse => {
				if (diffCourseGroups[userCourse.group] && diffCourseGroups[userCourse.group] > 0) {
					diffCourseGroups[userCourse.group]--;
				} else {
					const extras = diffCourseGroups[Enums.CourseGroupEnum.FREE_RANGE];
					if (extras) {
						extras.forEach(extra => {
							if (extra.total > 0 && extra.acceptable.includes(userCourse.group)) {
								extra.total--;
							}
						});
					}
				}
			});
			// reset the display
			this.coursesNeedToBeFulfilled = [];
			for (const [key, value] of Object.entries(diffCourseGroups)) {
				if (value <= 0) continue;
				if (key == Enums.CourseGroupEnum.FREE_RANGE) {
					const ranges = diffCourseGroups[Enums.CourseGroupEnum.FREE_RANGE];
					ranges.forEach(range => {
						if (range.total <= 0) return;
						this.coursesNeedToBeFulfilled.push({
							name: range.acceptable.join(' or '),
							total: range.total
						});
					});
				} else {
					this.coursesNeedToBeFulfilled.push({
						name: key,
						total: value
					});
				}
			}
			this.showResult = true;
			CacheService.set('showResult', true);
			this.generatePieGraph(requiredCourseGroups);
		},
		generatePieGraph: function(requiredCourseGroups) {
			const totalRequired = requiredCourseGroups.reduce((prev, cur) => {
				return prev + cur.total;
			}, 0);
			this.pieChartData = {
				labels: ['Completed', 'Remaining'],
				datasets: [
					{
						data: [this.userCourses.length, totalRequired - this.userCourses.length],
						backgroundColor: ['rgb(252, 247, 110)', 'rgb(164, 156, 156)']
					}
				]
			};
		},
		getCourseGroups: async function() {
			try {
				if(this.userProgram == '' || this.userYear == '') return;
				this.courseGroups = await CourseHandler.getUniqueCourseGroupsByProgram(this.userProgram, this.userYear);
				this.allowCourseSelection = true;
			}catch(e){
				alert(e.message);
				this.allowCourseSelection = false;
			}
		},
		initCache: function() {
			// init faculty
			const userFaculty = CacheService.get('userFaculty');
			if(userFaculty) this.userFaculty = userFaculty;
			// init program
			const userProgram = CacheService.get('userProgram');
			if(userProgram) this.userProgram = userProgram;
			// init year
			const userYear = CacheService.get('userYear');
			if(userYear) this.userYear = userYear;
			const courses = CacheService.get('userCourses');
			if(courses) this.userCourses = JSON.parse(courses);
			const showResult = CacheService.get('showResult');
			if(showResult) this.calculate();
			const userCourse = CacheService.get('userCourse');
			if(userCourse) this.userCourse = userCourse;
			const userCourseGroup = CacheService.get('userCourseGroup');
			if(userCourseGroup) this.userCourseGroup = userCourseGroup;
		}
	},
	watch: {
		userFaculty: async function() {
			this.programs = (await ProgramHandler.getProgramsByFaculty(this.userFaculty)).map(p => {
				return {
					...p,
					// adding properties to display on the list
					value: p.name,
					text: p.name
				};
			});
			this.allowProgramSelection = true;
			CacheService.set('userFaculty', this.userFaculty);
		},
		userYear: function() {
			this.getCourseGroups();
			CacheService.set('userYear', this.userYear);
		},
		userProgram: function() {
			this.getCourseGroups();
			CacheService.set('userProgram', this.userProgram);
		},
		userCourse: function() {
			CacheService.set('userCourse', this.userCourse);
		},
		userCourseGroup: function() {
			CacheService.set('userCourseGroup', this.userCourseGroup);
		}
	},
	async created() {
		this.faculties = await FacultyHandler.getFaculties();
		this.academicYears = AcademicYears.map(y => { 
			return {
				value: y.name,
				text: y.name
			};
		});
		this.availCourses = await CourseHandler.getAllCourses();
		this.initCache();
	}
};
</script>

<style scoped>
.removeCourseButton {
	padding: 0.05rem 0.3rem;
	margin-left: 0.6rem;
	font-size: 0.8rem;
}
.centerListItem {
	display: inline-block;
}
</style>
