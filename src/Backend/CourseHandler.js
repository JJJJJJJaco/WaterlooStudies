const { CourseService } = require('./Service');
const Enums = require('./Enums');

const getUniqueCourseGroupsByProgram = async (programName, year) => {
	const courseGroups = await getCourseGroupsByProgram(programName, year);
	let uniqueGroups = [];
	courseGroups.forEach(group => {
		if (group.name == Enums.CourseGroupEnum.FREE_RANGE) {
			group.acceptable.forEach(group => {
				if (!uniqueGroups.includes(group)) {
					uniqueGroups.push(group);
				}
			});
		} else {
			if (!uniqueGroups.includes(group.name)) {
				uniqueGroups.push(group.name);
			}
		}
	});
	return uniqueGroups;
};

const getCourseGroupsByProgram = async (programName, year) => {
	const courseGroups = await CourseService.getAllRequiredCourseGroups();
	const courseGroupsByProgram = courseGroups.filter(courseGroup => courseGroup.programName == programName && courseGroup.year.includes(year))[0];
	if(!courseGroupsByProgram){
		throw new Error(`couldn't find data for ${programName} for academic year ${year}`);
	}else{
		return courseGroupsByProgram.courseGroups;
	}
};

const getPrereqByCourseCode = async courseCode => {
	return await CourseService.getPrereqByCourseCode(courseCode);
};

const getCourseTitleByCourseCode = async courseCode => {
	try {
		return await CourseService.getCourseTitleByCourseCode(courseCode);
	} catch (e) {
		return null;
	}
};

const getAllCourses = async() => {
	const rawCourses = await CourseService.getAllCourses();
	let rtn = [];
	for(const code in rawCourses){
		rtn.push({
			code: code,
			title: rawCourses[code].title
		});
	}
	return rtn;
};

const getCoursesBySubjectCode = async subjectCode => {
	try {
		const courses = await CourseService.getCoursesBySubjectCode(subjectCode);
		// sort by course number in ascending order
		courses.sort((a,b) => parseInt(a.courseNumber) - parseInt(b.courseNumber));
		return courses;
	} catch (e) {
		console.error(e);
		return null;
	}
};

module.exports = {
	getUniqueCourseGroupsByProgram,
	getCourseGroupsByProgram,
	getPrereqByCourseCode,
	getCourseTitleByCourseCode,
	getAllCourses,
	getCoursesBySubjectCode
};
