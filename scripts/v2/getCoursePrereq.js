const { UW_API_V2_KEY, UW_API_V2_PATH } = require('../../src/Backend/Enums');
const { Courses } = require('../../src/Backend/Database');
const axios = require('axios');
const fs = require('fs');

(async () => {
	const totalRecords = Object.keys(Courses).length;
	let recordsProcessed = 0;
	let rtn = {};
	const header = {
		params: { 
			key: UW_API_V2_KEY,
		}
	};
	for(const obj in Courses){
		const category = obj.split(' ')[0];
		const number = obj.split(' ')[1];
		const courseKey = category + ' ' + number;
		console.log('processing..', courseKey);
		try {
			const response = await axios.get(`${UW_API_V2_PATH}/courses/${category}/${number}.json`, header);
			if(response.data.data){
				const { prerequisites } = response.data.data;
				let children = [];
				if(prerequisites){
					const split = prerequisites.split(';').map(s => s.trim());
					split.forEach(s => {
						children.push({
							text: { name: s }
						});
					});
				}
				if(!rtn[courseKey]) rtn[courseKey] = {};
				rtn[courseKey].text = { name: courseKey };
				if(children.length > 0) rtn[courseKey].children = children; 
			}else{
				console.error(response);
				throw 'failed to fetch data from response';
			}
			recordsProcessed++;
			console.log(`finished. ${totalRecords - recordsProcessed} remaining.`);
		} catch(error){
			console.error(error);
		}
	}
	fs.writeFile('CoursePrereq.js', JSON.stringify(rtn, null, 4), function (err) {
		if (err) throw err;
		console.log('Saved!');
	});
})();