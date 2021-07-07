const fs = require('fs').promises;
const path = require('path');

const appendSubject = async () => {
	// only contains subject names for undergrad courses
	const listOfSubjects = {
		'AFM': 'Accounting & Financial Management',
		'ACTSC': 'Actuarial Science',
		'ASL': 'American Sign Language',
		'ANTH':'Anthropology',
		'AHS':'Applied Health Sciences',
		'APPLS':'Applied Language Studies',
		'AMATH':'Applied Mathematics',
		'ARABIC':'Arabic',
		'AE':'Architectural Engineering',
		'ARCH':'Architecture',
		'ARTS':'Arts',
		'ARBUS':'Arts and Business',
		'AVIA':'Aviation',
		'BIOL':'Biology',
		'BME':'Biomedical Engineering',
		'BASE':'Bridge to Academic Success in English',
		'BUS':'Business (Wilfrid Laurier University)',
		'BET':'Business, Entrepreneurship and Technology',
		'CDNST':'Canadian Studies',
		'CHE':'Chemical Engineering',
		'CHEM':'Chemistry',
		'CHINA':'Chinese',
		'CMW':'Church Music and Worship',
		'CIVE':'Civil Engineering',
		'CLAS':'Classical Studies',
		'COGSCI':'Cognitive Science',
		'CO':'Combinatorics and Optimization',
		'COMM':'Commerce',
		'CS':'Computer Science',
		'CFM':'Computing and Financial Management',
		'COOP':'Co-operative Work Term',
		'CROAT':'Croatian',
		'CI':'Cultural Identities',
		'DAC':'Digital Arts Communication',
		'DUTCH':'Dutch',
		'EARTH':'Earth Sciences',
		'EASIA':'East Asian',
		'ECON':'Economics',
		'ECE':'Electrical and Computer Engineering',
		'ENGL':'English',
		'EMLS':'English for Multilingual Speakers',
		'ENBUS':'Environment and Business',
		'ERS':'Environment, Resources and Sustainability',
		'ENVE':'Environmental Engineering',
		'ENVS':'Environmental Studies',
		'FINE':'Fine Arts',
		'FR':'French Studies/Études Françaises',
		'GSJ':'Gender and Social Justice',
		'GENE':'General Engineering',
		'GEOG':'Geography and Environmental Management',
		'GEOE':'Geological Engineering',
		'GER':'German',
		'GERON':'Gerontology',
		'GBDA':'Global Business and Digital Arts',
		'GRK':'Greek',
		'HLTH':'Health',
		'HIST':'History',
		'HRM':'Human Resources Management',
		'HRTS':'Human Rights',
		'HUMSC':'Human Sciences',
		'INDENT':'Indigenous Entrepreneurship',
		'INDG':'Indigenous Studies',
		'INDEV':'International Development',
		'INTST':'International Studies',
		'ITAL':'Italian',
		'ITALST':'Italian Studies',
		'JAPAN':'Japanese',
		'JS':'Jewish Studies',
		'KIN':'Kinesiology',
		'INTEG':'Knowledge Integration',
		'KOREA':'Korean',
		'LAT':'Latin',
		'LS':'Legal Studies',
		'MGMT':'Management',
		'MSCI':'Management Sciences',
		'MNS':'Materials and Nano-Sciences',
		'MATBUS':'Mathematical Business',
		'MATH':'Mathematics',
		'MTHEL':'Mathematics Electives',
		'ME':'Mechanical Engineering',
		'MTE':'Mechatronics Engineering',
		'MEDVL':'Medieval Studies',
		'MENN':'Mennonite Studies',
		'MOHAWK':'Mohawk',
		'MUSIC':'Music',
		'NE':'Nanotechnology Engineering',
		'OPTOM':'Optometry',
		'PACS':'Peace and Conflict Studies',
		'PHARM':'Pharmacy',
		'PHIL':'Philosophy',
		'PHYS':'Physics',
		'PLAN':'Planning',
		'PSCI':'Political Science',
		'PORT':'Portuguese',
		'PD':'Professional Development',
		'PDARCH':'Professional Development for Architecture Students',
		'PDPHRM':'Professional Development for Pharmacy Students',
		'PSYCH':'Psychology',
		'PMATH':'Pure Mathematics',
		'REC':'Recreation and Leisure Studies',
		'RS':'Religious Studies',
		'RUSS':'Russian',
		'REES':'Russian and East European Studies',
		'SCI':'Science',
		'SCBUS':'Science and Business',
		'SMF':'Sexuality, Marriage, and Family Studies',
		'SDS':'Social Development Studies',
		'SVENT':'Social Venture Entrepreneur',
		'SOCWK':'Social Work (Social Development Studies)',
		'SWREN':'Social Work (Bachelor of Social Work)',
		'STV':'Society, Technology and Values',
		'SOC':'Sociology',
		'SE':'Software Engineering',
		'SPAN':'Spanish',
		'SPCOM':'Speech Communication',
		'STAT':'Statistics',
		'SI':'Studies in Islam',
		'SYDE':'Systems Design Engineering',
		'THPERF':'Theatre and Performance',
		'UNIV':'University',
		'VCULT':'Visual Culture',
		'WKRPT':'Work-term Report',
	};
	
	let rtn = {};

	const data = await fs.readFile(path.join(__dirname, '..', '..', 'src', 'Backend', 'Database','Courses.js'), 'utf8');
	const parsedData = JSON.parse(Buffer.from(data));
	for(const key in parsedData){
		const category = key.split(' ')[0];
		const number = key.split(' ')[1];
		// only care about undergrad courses
		if(category in listOfSubjects){
			let course = parsedData[key];
			course.subjectName = listOfSubjects[category];
			course.subjectCode = category;
			course.courseNumber = number;
			rtn[key] = course;
		}
	}

	await fs.writeFile(path.join(__dirname, 'AppendedCourses.js'), JSON.stringify(rtn, null, 4), function (err) {
		if (err) throw err;
		console.log('Saved!');
	});
};

// entry point
(async () => {
	await appendSubject();
})();

