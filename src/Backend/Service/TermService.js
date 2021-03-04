const axios = require('axios');
const { UW_API_V3_KEY, UW_API_V3_PATH } = require('../Enums');

const axiosConfig = {
	headers: { 
		'x-api-key': UW_API_V3_KEY,
	}
};

const getCurrentTerm = async () => {
	const response = await axios.get(`${UW_API_V3_PATH}/Terms/current`, axiosConfig);
	if(response.data){
		return response.data;
	}else{
		throw new Error('no data returned from api', response);
	}
};

const getCoursesByTermCodeAndSubjectCode = async (termCode, subjectCode) => {
	const response = await axios.get(`${UW_API_V3_PATH}/Courses/${termCode}/${subjectCode}`, axiosConfig);
	if(response.data){
		return response.data;
	}else{
		throw new Error('no data returned from api', response);
	}
};

const getPast5AcademicYearTerms = async () => {
	const currentTerm = await getCurrentTerm();
	const currentTermAAY = currentTerm.associatedAcademicYear; //AAY = associatedAcademicYear
	const availableAAYs = []; // availableAAYs = [AAY-5 : AAY]
	for(let i = currentTermAAY - 5; i <= currentTermAAY; i++){
		availableAAYs.push(i);
	}
	let availableTerms = [];
	for(const ay of availableAAYs){
		const term = await getTermForAcademicYear(ay);
		availableTerms = availableTerms.concat(term);
	}
	// sort ascending by term name
	availableTerms.sort((a, b) => b.nameShort.localeCompare(a.nameShort));
	return availableTerms;
};

const getTermForAcademicYear = async (academicYear) => {
	const response = await axios.get(`${UW_API_V3_PATH}/Terms/foracademicyear/${academicYear}`, axiosConfig);
	if(response.data){
		return response.data;
	}else{
		throw new Error('no data returned from api', response);
	}
};

module.exports = {
	getCurrentTerm,
	getCoursesByTermCodeAndSubjectCode,
	getPast5AcademicYearTerms
};