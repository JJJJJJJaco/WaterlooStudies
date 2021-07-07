const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, '..', '..', 'src', 'Backend', 'Database','Courses.js'), 'utf8', (err, data) => {
	if (err) throw err;
	const parsedData = JSON.parse(data);
	const categorySet = new Set();
	for(const obj in parsedData){
		const category = obj.split(' ')[0];
		categorySet.add(category);
	}
	console.log(categorySet);
});