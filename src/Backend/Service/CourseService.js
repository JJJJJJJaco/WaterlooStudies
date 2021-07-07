const { RequiredCoursesByProgram, CoursePrereq, Courses } = require('../Database');

const getAllRequiredCourseGroups = async () => {
	return new Promise(resolve => resolve(RequiredCoursesByProgram));
};

const getPrereqByCourseCode = async(courseCode) => {
	let obj = {};
	if(courseCode in CoursePrereq){
		const course = CoursePrereq[courseCode];
		// copy only the text part
		obj.text = course.text;
		if(course.children){
			// deal with children part
			course.children.forEach(async c => {
				let subChildren = await getPrereqByCourseCode(c.text.name);
				subChildren = subChildren == null ? c : subChildren;
				if(obj.children){
					obj.children.push(subChildren);
				}else{
					obj.children = [subChildren];
				}
			});
		}
	}else{
		return null;
	}
	return new Promise(resolve => resolve(obj));
};

const getCourseTitleByCourseCode = async(courseCode) => {
	return new Promise(resolve => resolve(Courses[courseCode]));
};

const getAllCourses = async() => {
	return new Promise(resolve => resolve(Courses));
};

const getCoursesBySubjectCode = async(subjectCode) => {
	let rtn = [];
	for(const courseKey in Courses){
		const course = Courses[courseKey];
		if(course.subjectCode == subjectCode) rtn.push(course);
	}
	return rtn;
};

module.exports = {
	getAllRequiredCourseGroups,
	getPrereqByCourseCode,
	getCourseTitleByCourseCode,
	getAllCourses,
	getCoursesBySubjectCode
};
