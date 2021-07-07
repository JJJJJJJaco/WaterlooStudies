<template>
	<div class="container">
		<p>Enter your course code</p>
		<b-form-input v-model="courseName" placeholder="ex. MSCI 100" list="availCoursesList" @focus="clearCourseName()"></b-form-input> 
		<datalist id="availCoursesList">
			<option v-for="(data, index) in availCourses" :key="index">{{ data.code }} - {{ data.title }}</option>
		</datalist>
		<p class="subscript">*Courses will be highlighted red if they are included in Credit Tracker</p>
		<div v-if="showTree">
			<TreeGraph 
				:id="1" 
				:tree="tree" 
				@onDisplayUserSelectedCourse="onDisplayUserSelectedCourse"
				:userSelectedCourses="userSelectedCourses"></TreeGraph>
		</div>
	</div>
</template>

<script>
import TreeGraph from '@/components/TreeGraph.vue';
const { CourseHandler } = require('@/Backend');
const { CacheService } = require('@/Backend/Service');
export default {
	components: {
		TreeGraph
	},
	data() {
		return {
			tree: { text: { name: 'dummy' } },
			courseName: '',
			showTree: false,
			courseTitle: '',
			userSelectedCourses: [],
			availCourses: []
		};
	},
	methods: {
		clearCourseName: function(){
			this.courseName = '';
		},
		onDisplayUserSelectedCourse: function(node){
			node.classList.add('userSelectedCourse');
		},
		capitalize: function(val){
			if(!val) return;
			let rtn = '';
			for(const c of val) rtn += c.toUpperCase();
			return rtn;
		},
		initCache: function(){
			const courseName = CacheService.get('courseName');
			if(courseName) this.courseName = courseName;
			const userSelectedCourses = CacheService.get('userCourses');
			if(userSelectedCourses) this.userSelectedCourses = JSON.parse(userSelectedCourses);
		}
	},
	watch: { 
		courseName: async function(newVal) {
			const splitCourseName = newVal.split(' - ');
			const courseCode = splitCourseName[0].trim();
			const tempTree = await CourseHandler.getPrereqByCourseCode(courseCode);
			if(tempTree) {
				this.tree = tempTree;
				this.showTree = true;
			}
			CacheService.set('courseName', this.courseName);
		}
	},
	async created() {
		this.initCache();
		this.availCourses = await CourseHandler.getAllCourses();
	}
};
</script>

<style scoped>
.subscript {
	font-size: smaller
}
</style>