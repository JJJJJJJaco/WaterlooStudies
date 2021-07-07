<template>
    <div class="container">
		<h1>Favourite Course</h1>
        <b-table
				v-if="courseTableData != null && courseTableData.length > 0" 
				striped 
				hover 
				selectable 
				:items="courseTableData" 
				:fields="courseTableFields" 
				ref="courseTable">
			</b-table>
			<p v-else>No data available</p>
    </div>
</template>

<script>
const { CacheService } = require('@/Backend/Service');
export default {
	name: 'FavoriteCoursePage',
	components: {},
	// all class variables
	data() {
		return {
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
					key: 'termName',
					label: 'Offered Term',
					sortable: true
				}
			],
			courseTableData: [],
		};
	},
	// all methods to use
	methods: {
		initCache: function(){
			const userSelectedCourses = CacheService.get('courseCatalogSelected');
			if(userSelectedCourses) this.courseTableData = JSON.parse(userSelectedCourses);
		}
	},
	// detect variable changes
	watch: {},
	async created() {
		this.initCache();
	},
};
</script>