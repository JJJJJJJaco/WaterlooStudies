<template>
    <div class="container">
		<h1>Course Catalog</h1>
		<div>
			<p>Enter subject name</p>
			<b-input-group size="sm">
				<b-form-input v-model="userSubject" placeholder="ex: Management Science" list="availCoursesList" @focus="clearUserSubject()"></b-form-input> 
					<datalist id="availCoursesList">
						<option v-for="(data, index) in availSubjects" :key="index">{{ data.subjectCode }} - {{ data.subjectName }}</option>
					</datalist>
			</b-input-group>
			<p>Enter term name</p>
			<template>
				<FadeLoader
					v-if="next3AcademicYearTerms.length <= 0"					
					class="loader"
				/>
				<b-input-group v-else size="sm">
					<b-form-input v-model="userTerm" placeholder="ex: winter 2021" list="past5AvailTermList" @focus="clearUserTerm()"></b-form-input> 
						<datalist id="past5AvailTermList">
							<option v-for="(data, index) in next3AcademicYearTerms" :key="index">{{data.termCode}} - {{ data.name }}</option>
						</datalist>
				</b-input-group>
			</template>
			<b-button class="margin-top" variant="success" @click="showSubjectTable()">Enter</b-button>
		</div>
		<div class="margin-top">
			<FadeLoader
				:loading="isLoading"
				class="loader"
			/>
			<b-table
				v-if="courseTableData != null && courseTableData.length > 0" 
				striped 
				hover 
				selectable 
				:items="courseTableData" 
				:fields="courseTableFields" 
				ref="courseTable"
				@row-clicked="onCourseTableRowClicked">
				<template #cell(favorite)="{ rowSelected }">
					<template v-if="rowSelected">
						<span aria-hidden="true">
							<font-awesome-icon icon="star" class="favoriteIcon" />
						</span>
						<span class="sr-only">favorite</span>
					</template>
					<template v-else>
						<span aria-hidden="true">&nbsp;</span>
						<span class="sr-only">Not favorite</span>
					</template>
				</template>
			</b-table>
			<p v-else>No data available</p>
		</div>
	</div>
	
</template>

<script>
const { Subjects } = require('@/Backend/Database');
const { TermHandler } = require('@/Backend');
const { CacheService } = require('@/Backend/Service');
import { FadeLoader } from '@saeris/vue-spinners';
export default {
	name: 'CourseCatalogPage',
	components: {
		FadeLoader
	},
	// all class variables
	data() {
		return {
			availSubjects: [],
			next3AcademicYearTerms: [],
			userSubject: '',
			userTerm: '',
			courseTableFields: [
				{
					key: 'subjectCode',
					label: 'Subject Code',
				},
				{
					key: 'catalogNumber',
					label: 'Course Number',
				},
				{
					key: 'description',
					label: 'Course Description',
				},
				{
					key: 'favorite',
					label: 'Favorite'
				}
			],
			courseTableData: [],
			selectedCourses: [],
			isLoading: false
		};
	},
	// all methods to use
	methods: {
		clearUserTerm: function(){
			this.userTerm = '';
		},
		clearUserSubject: function(){
			this.userSubject = '';
		},
		onCourseTableRowClicked: async function(item, _, event){
			const index = this.selectedCourses.findIndex(s => s.catalogNumber == item.catalogNumber && s.subjectCode == item.subjectCode);
			// if parent is false, it means we are "selecting"
			if(event.target.parentElement.ariaSelected === 'false' && index <= -1){
				// add item to selected courses
				this.selectedCourses.push(item);
			}else{
				// remove the item from selected courses
				this.selectedCourses.splice(index, 1);
			}
			CacheService.set('courseCatalogSelected', JSON.stringify(this.selectedCourses));
		},
		showSubjectTable: async function(){
			this.isLoading = true;
			const userSubjectCode = this.userSubject.split('-')[0].trim();
			const userTerm = this.userTerm.split('-')[0].trim();
			if(userSubjectCode == '' || userTerm == ''){
				alert('subject or term cannot be empty');
				this.isLoading = false;
				return;
			}
			const courseTableData = await TermHandler.getCoursesByTermCodeAndSubjectCode(userTerm, userSubjectCode);
			if(courseTableData){
				this.courseTableData = courseTableData;
			}else{
				this.courseTableData = null;
			}
			this.isLoading = false;
		},
		initFavoritedCourses: async function(){
			if(!(this.selectedCourses && this.courseTableData)) return;
			this.selectedCourses.forEach(course => {
				this.courseTableData.forEach((data, index) => {
					if(data.catalogNumber == course.catalogNumber && 
						data.subjectCode == course.subjectCode && 
						data.termCode == course.termCode){
						this.$refs.courseTable.selectRow(index);
					}
				});
			});
		},
		initCache: function(){
			const userSelectedCourses = CacheService.get('courseCatalogSelected');
			if(userSelectedCourses) this.selectedCourses = JSON.parse(userSelectedCourses);
		}
	},
	// detect variable changes
	watch: {
	},
	async created() {
		for (const code in Subjects){
			this.availSubjects.push({
				'subjectCode': code,
				'subjectName': Subjects[code]	 
			});
		}
		this.next3AcademicYearTerms = await TermHandler.getNext3AcademicYearTerms();
		const currentTerm = await TermHandler.getCurrentTerm();
		this.userTerm = `${currentTerm.termCode} - ${currentTerm.name}`;
		this.initCache();
	},
	// called after the table re-renders
	updated: function() {
		this.initFavoritedCourses();
	}
};
</script>

<style scoped>
.margin-top {
	margin-top: 1em;
}
.favoriteIcon {
	color:#ffff17;
}
.loader {
	margin: 0 auto;
}
</style>