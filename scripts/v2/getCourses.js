const { UW_API_V2_KEY, UW_API_V2_PATH } = require('../../src/Backend/Enums');
const axios = require('axios');
const fs = require('fs');

(async () => {
	let rtn = {};
	const header = {
		params: { 
			key: UW_API_V2_KEY,
		}
	};
	let recordsProcessed = 0;
	try {
		const coursesResponse = await axios.get(`${UW_API_V2_PATH}/courses.json`, header);
		if(coursesResponse.data.data){
			const courses = coursesResponse.data.data;
			const totalRecords = courses.length;
			for(const c of courses){
				const { subject, catalog_number, title } = c;
				const courseKey = subject + ' ' + catalog_number;
				let description = '';
				console.log(`processing ${courseKey}`);
				// get course details
				const courseResponse = await axios.get(`${UW_API_V2_PATH}/courses/${subject}/${catalog_number}.json`, header);
				if(courseResponse.data.data){
					description = courseResponse.data.data.description;
				}else{
					throw `No course data for ${courseKey} returned`;
				}
				if(!rtn[courseKey]) rtn[courseKey] = {};
				rtn[courseKey].title = title;
				rtn[courseKey].label = [];
				rtn[courseKey].description = description;
				recordsProcessed++;
				console.log(`${totalRecords - recordsProcessed} remaining`);
			}
		}else{
			throw 'No courses data returned';
		}     
	}catch(e){
		console.error(e);
	}
	fs.writeFile('Courses.js', JSON.stringify(rtn, null, 4), function (err) {
		if (err) throw err;
		console.log('Saved!');
	});
})();