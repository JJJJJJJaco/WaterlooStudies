const { TermService } = require('./Service');

const getAllAvailableTerms = async () => {
	return await TermService.getAllAvailableTerms();
};

const getCurrentTerm = async () => {
	try {
		const result = await TermService.getCurrentTerm();
		return result;
	}catch(e){
		console.error(e);
		return null;
	}
};

const getNext3AcademicYearTerms = async () => {
	return await TermService.getNext3AcademicYearTerms();
};

const getCoursesByTermCodeAndSubjectCode = async (termCode, subjectCode) => {
	try {
		const courses = await TermService.getCoursesByTermCodeAndSubjectCode(termCode, subjectCode);
		courses.sort((a,b) => parseInt(a.catalogNumber) - parseInt(b.catalogNumber));
		return courses;
	} catch (e) {
		console.error(e);
		return null;
	}
};

module.exports = {
	getCurrentTerm,
	getAllAvailableTerms,
	getNext3AcademicYearTerms,
	getCoursesByTermCodeAndSubjectCode,
};