const Enums = require('../Enums');

module.exports = [
	{
		programName: Enums.ProgramEnum.AE,
		year: [Enums.AcademicYearsEnum[1819]],
		courseGroups: [
			{
				name: Enums.CourseGroupEnum.CSE_LIST_A,
				total: 1
			},						
			{
				name: Enums.CourseGroupEnum.CSE_LIST_C,
				total: 2
			},
			{
				name: Enums.CourseGroupEnum.TECH_LIST_A,
				total: 3
			},
			{
				name: Enums.CourseGroupEnum.TECH_LIST_B,
				total: 2
			},
			{
				name: Enums.CourseGroupEnum.TECH_LIST_D,
				total: 1
			},
		]
	},
	{
		programName: Enums.ProgramEnum.AE,
		year: [Enums.AcademicYearsEnum[1920]],
		courseGroups: [
			{
				name: Enums.CourseGroupEnum.CSE_LIST_A,
				total: 1
			},						
			{
				name: Enums.CourseGroupEnum.CSE_LIST_C,
				total: 21
			},
			{
				name: Enums.CourseGroupEnum.TECH_LIST_A,
				total: 3
			},
			{
				name: Enums.CourseGroupEnum.TECH_LIST_B,
				total: 2
			},
			{
				name: Enums.CourseGroupEnum.TECH_LIST_D,
				total: 1
			},
		]
	},
	{
		programName: Enums.ProgramEnum.BME,
		year: [Enums.AcademicYearsEnum[1617],Enums.AcademicYearsEnum[1718],Enums.AcademicYearsEnum[1819],Enums.AcademicYearsEnum[1920]],
		courseGroups: [
			{
				name: Enums.CourseGroupEnum.CEAB,
				total: 2
			},		
			{
				name: Enums.CourseGroupEnum.FREE_RANGE,
				total: 3,
				acceptable: [
					Enums.CourseGroupEnum.CSE_LIST_A,
					Enums.CourseGroupEnum.CSE_LIST_B,
					Enums.CourseGroupEnum.CSE_LIST_C,
					Enums.CourseGroupEnum.CSE_LIST_D
				]
			},
			{
				name: Enums.CourseGroupEnum.TE,
				total: 6
			},				
		]
	},
	{
		programName: Enums.ProgramEnum.CHE,
		year: [Enums.AcademicYearsEnum[1617],Enums.AcademicYearsEnum[1718]],
		courseGroups: [
			{
				name: Enums.CourseGroupEnum.FREE_RANGE,
				total: 5,
				acceptable: [
					Enums.CourseGroupEnum.CSE_LIST_A,
					Enums.CourseGroupEnum.CSE_LIST_C,
					Enums.CourseGroupEnum.CSE_LIST_B,
					Enums.CourseGroupEnum.CSE_LIST_D
				]
			}
		]
	},
	{
		programName: Enums.ProgramEnum.CHE,
		year: [Enums.AcademicYearsEnum[1819],Enums.AcademicYearsEnum[1920]],
		courseGroups: [
			{
				name: Enums.CourseGroupEnum.FREE_RANGE,
				total: 5,
				acceptable: [
					Enums.CourseGroupEnum.CSE_LIST_A,
					Enums.CourseGroupEnum.CSE_LIST_C,
					Enums.CourseGroupEnum.CSE_LIST_B,
					Enums.CourseGroupEnum.CSE_LIST_D
				]
			},{
				name: Enums.CourseGroupEnum.COMM,
				total: 1
			},
			{
				name: Enums.CourseGroupEnum.ETHICS,
				total: 1
			},
			{
				name: Enums.CourseGroupEnum.WKRPT,
				total: 4
			},
		]
	},
	{
		programName: Enums.ProgramEnum.CIVE,
		year: [Enums.AcademicYearsEnum[1617]],
		courseGroups: [
			{
				name: Enums.CourseGroupEnum.TECH_LIST_A,
				total: 3
			},
			{
				name: Enums.CourseGroupEnum.TECH_LIST_B,
				total: 1 //max4
			},
			{
				name: Enums.CourseGroupEnum.TECH_LIST_C,
				total: 2
			},
			{
				name: Enums.CourseGroupEnum.CSE_LIST_A,
				total: 1
			},
			{
				name: Enums.CourseGroupEnum.CSE_LIST_C,
				total: 2
			},
			{
				name: Enums.CourseGroupEnum.FREE_RANGE,
				total: 1,
				acceptable: [
					Enums.CourseGroupEnum.CSE_LIST_A,
					Enums.CourseGroupEnum.CSE_LIST_C,
					Enums.CourseGroupEnum.CSE_LIST_D
				]
			},	
		]
	},
	{
		programName: Enums.ProgramEnum.CIVE,
		year: [Enums.AcademicYearsEnum[1718],Enums.AcademicYearsEnum[1819]],
		courseGroups: [
			{
				name: Enums.CourseGroupEnum.TECH_LIST_A,
				total: 3
			},
			{
				name: Enums.CourseGroupEnum.TECH_LIST_B,
				total: 1 //max4
			},
			{
				name: Enums.CourseGroupEnum.TECH_LIST_C,
				total: 1
			},
			{
				name: Enums.CourseGroupEnum.CSE_LIST_A,
				total: 1
			},
			{
				name: Enums.CourseGroupEnum.CSE_LIST_C,
				total: 2
			},
			{
				name: Enums.CourseGroupEnum.FREE_RANGE,
				total: 1,
				acceptable: [
					Enums.CourseGroupEnum.CSE_LIST_A,
					Enums.CourseGroupEnum.CSE_LIST_C,
					Enums.CourseGroupEnum.CSE_LIST_D
				]
			},	
		]
	},
	{
		programName: Enums.ProgramEnum.CIVE,
		year: [Enums.AcademicYearsEnum[1920]],
		courseGroups: [
			{
				name: Enums.CourseGroupEnum.TECH_LIST_A,
				total: 3
			},
			{
				name: Enums.CourseGroupEnum.TECH_LIST_B,
				total: 1 //max4
			},
			{
				name: Enums.CourseGroupEnum.TECH_LIST_C,
				total: 1
			},
			{
				name: Enums.CourseGroupEnum.CSE_LIST_A,
				total: 1
			},
			{
				name: Enums.CourseGroupEnum.CSE_LIST_C,
				total: 2
			}
		]
	},
	{
		programName: Enums.ProgramEnum.ECE,
		year: [Enums.AcademicYearsEnum[1617]],
		courseGroups: [
			{
				name: Enums.CourseGroupEnum.CSE_LIST_C,
				total: 2
			},		
			{
				name: Enums.CourseGroupEnum.CSE_LIST_A,
				total: 2
			},				
			{
				name: Enums.CourseGroupEnum.FREE_RANGE,
				total: 1,
				acceptable: [
					Enums.CourseGroupEnum.CSE_LIST_A,
					Enums.CourseGroupEnum.CSE_LIST_C,
					Enums.CourseGroupEnum.CSE_LIST_D
				]
			},		
			{
				name: Enums.CourseGroupEnum.NSE,
				total: 2
			},
			{
				name: Enums.CourseGroupEnum.ETHICS,
				total: 1
			},
			{
				name: Enums.CourseGroupEnum.TE,
				total: 5
			},	
			{
				name: Enums.CourseGroupEnum.WKRPT,
				total: 3
			},	
		]
	},
	{
		programName: Enums.ProgramEnum.ECE,
		year: [Enums.AcademicYearsEnum[1718]],
		courseGroups: [
			{
				name: Enums.CourseGroupEnum.CSE_LIST_C,
				total: 2
			},			
			{
				name: Enums.CourseGroupEnum.FREE_RANGE,
				total: 2,
				acceptable: [
					Enums.CourseGroupEnum.CSE_LIST_A,
					Enums.CourseGroupEnum.CSE_LIST_C,
					Enums.CourseGroupEnum.CSE_LIST_D
				]
			},		
			{
				name: Enums.CourseGroupEnum.NSE,
				total: 2
			},
			{
				name: Enums.CourseGroupEnum.ETHICS,
				total: 1
			},
			{
				name: Enums.CourseGroupEnum.TE,
				total: 5
			},	
			{
				name: Enums.CourseGroupEnum.WKRPT,
				total: 3
			},	
		]
	},
	{
		programName: Enums.ProgramEnum.ECE,
		year: [Enums.AcademicYearsEnum[1819],Enums.AcademicYearsEnum[1920]],
		courseGroups: [
			{
				name: Enums.CourseGroupEnum.CSE_LIST_C,
				total: 2
			},		
			{
				name: Enums.CourseGroupEnum.CSE_LIST_A,
				total: 1
			},				
			{
				name: Enums.CourseGroupEnum.NSE,
				total: 2
			},
			{
				name: Enums.CourseGroupEnum.ETHICS,
				total: 1
			},
			{
				name: Enums.CourseGroupEnum.TE,
				total: 8
			},	
			{
				name: Enums.CourseGroupEnum.WKRPT,
				total: 3
			},	
		]
	},
	{
		programName: Enums.ProgramEnum.ENVE,
		year: [Enums.AcademicYearsEnum[1617]],
		courseGroups: [
			{
				name: Enums.CourseGroupEnum.CSE_LIST_C,
				total: 2
			},	
			{
				name: Enums.CourseGroupEnum.FREE_RANGE,
				total: 1,
				acceptable: [
					Enums.CourseGroupEnum.CSE_LIST_A,
					Enums.CourseGroupEnum.CSE_LIST_C,
					Enums.CourseGroupEnum.CSE_LIST_D,
				]
			},	
			{
				name: Enums.CourseGroupEnum.TECH_LIST_A,
				total: 4
			},		
			{
				name: Enums.CourseGroupEnum.FREE_RANGE,
				total: 3,
				acceptable: [
					Enums.CourseGroupEnum.TECH_LIST_A,
					Enums.CourseGroupEnum.TECH_LIST_B,
				]
			},
		]
	},
	{
		programName: Enums.ProgramEnum.ENVE,
		year: [Enums.AcademicYearsEnum[1718]],
		courseGroups: [
			{
				name: Enums.CourseGroupEnum.TECH_LIST_A,
				total: 4
			},	
			{
				name: Enums.CourseGroupEnum.FREE_RANGE,
				total: 3,
				acceptable: [
					Enums.CourseGroupEnum.TECH_LIST_A,
					Enums.CourseGroupEnum.TECH_LIST_B
				]
			},		
			{
				name: Enums.CourseGroupEnum.CSE_LIST_C,
				total: 2
			},	
			{
				name: Enums.CourseGroupEnum.CSE_LIST_A,
				total: 1
			},		
			{
				name: Enums.CourseGroupEnum.FREE_RANGE,
				total: 3,
				acceptable: [
					Enums.CourseGroupEnum.TECH_LIST_A,
					Enums.CourseGroupEnum.TECH_LIST_B,
				]
			},
		]
	},
	{
		programName: Enums.ProgramEnum.ENVE,
		year: [Enums.AcademicYearsEnum[1819]],
		courseGroups: [
			{
				name: Enums.CourseGroupEnum.TECH_LIST_A,
				total: 4
			},	
			{
				name: Enums.CourseGroupEnum.FREE_RANGE,
				total: 3,
				acceptable: [
					Enums.CourseGroupEnum.TECH_LIST_A,
					Enums.CourseGroupEnum.TECH_LIST_B
				]
			},		
			{
				name: Enums.CourseGroupEnum.CSE_LIST_C,
				total: 2
			},	
			{
				name: Enums.CourseGroupEnum.CSE_LIST_A,
				total: 1
			},		
		]
	},
	{
		programName: Enums.ProgramEnum.ENVE,
		year: [Enums.AcademicYearsEnum[1920]],
		courseGroups: [
			{
				name: Enums.CourseGroupEnum.TECH_LIST_A,
				total: 4
			},	
			{
				name: Enums.CourseGroupEnum.FREE_RANGE,
				total: 3,
				acceptable: [
					Enums.CourseGroupEnum.TECH_LIST_A,
					Enums.CourseGroupEnum.TECH_LIST_B
				]
			},		
			{
				name: Enums.CourseGroupEnum.CSE_LIST_C,
				total: 2
			},	
		]
	},
	{
		programName: Enums.ProgramEnum.GEOE,
		year: [Enums.AcademicYearsEnum[1617],Enums.AcademicYearsEnum[1718],Enums.AcademicYearsEnum[1819]],
		courseGroups: [
			{
				name: Enums.CourseGroupEnum.TE,
				total: 5
			},	
		]
	},
	{
		programName: Enums.ProgramEnum.GEOE,
		year: [Enums.AcademicYearsEnum[1920]],
		courseGroups: [
			{
				name: Enums.CourseGroupEnum.TE,
				total: 5
			},	
			{
				name: Enums.CourseGroupEnum.CSE_LIST_A,
				total: 1
			},	
			{
				name: Enums.CourseGroupEnum.CSE_LIST_C,
				total: 2
			},	
		]
	},
	{
		programName: Enums.ProgramEnum.MGTE,
		year: [Enums.AcademicYearsEnum[1617],Enums.AcademicYearsEnum[1718],Enums.AcademicYearsEnum[1819]],
		courseGroups: [
			{
				name: Enums.CourseGroupEnum.LIST_1,
				total: 6
			},
			{
				name: Enums.CourseGroupEnum.CSE_LIST_A,
				total: 1
			},
			{
				name: Enums.CourseGroupEnum.FREE_ELEC,
				total: 2
			},
			{
				name: Enums.CourseGroupEnum.PD,
				total: 5
			}
		]
	},
	{
		programName: Enums.ProgramEnum.ME,
		year: [Enums.AcademicYearsEnum[1617],Enums.AcademicYearsEnum[1718],Enums.AcademicYearsEnum[1819],Enums.AcademicYearsEnum[1920]],
		courseGroups: [	
			{
				name: Enums.CourseGroupEnum.CSE_LIST_B,
				total: 1
			},					
			{
				name: Enums.CourseGroupEnum.FREE_RANGE,
				total: 4,
				acceptable: [
					Enums.CourseGroupEnum.CSE_LIST_A,
					Enums.CourseGroupEnum.CSE_LIST_B,
					Enums.CourseGroupEnum.CSE_LIST_C,
					Enums.CourseGroupEnum.CSE_LIST_D,
				]
			},
			{
				name: Enums.CourseGroupEnum.TE,
				total: 7
			},	
		]
	},
	{
		programName: Enums.ProgramEnum.MTE,
		year: [Enums.AcademicYearsEnum[1617],Enums.AcademicYearsEnum[1718],Enums.AcademicYearsEnum[1819],Enums.AcademicYearsEnum[1920]],
		courseGroups: [
			{
				name: Enums.CourseGroupEnum.TE,
				total: 5
			},	
		]
	},
	{
		programName: Enums.ProgramEnum.NE,
		year: [Enums.AcademicYearsEnum[1617],Enums.AcademicYearsEnum[1718],Enums.AcademicYearsEnum[1819],Enums.AcademicYearsEnum[1920]],
		courseGroups: [
			{
				name: Enums.CourseGroupEnum.TE,
				total: 9
			},	
		]
	},
	{
		programName: Enums.ProgramEnum.SE,
		year: [Enums.AcademicYearsEnum[1617],Enums.AcademicYearsEnum[1718],Enums.AcademicYearsEnum[1819],Enums.AcademicYearsEnum[1920]],
		courseGroups: [
			{
				name: Enums.CourseGroupEnum.CSLIST,
				total: 1
			},	
			{
				name: Enums.CourseGroupEnum.ECELIST,
				total: 1
			},	
			{
				name: Enums.CourseGroupEnum.FREE_RANGE,
				total: 1,
				acceptable: [
					Enums.CourseGroupEnum.CSLIST,
					Enums.CourseGroupEnum.ECELIST,
				]
			},
			{
				name: Enums.CourseGroupEnum.SCE,
				total: 2
			},	
			{
				name: Enums.CourseGroupEnum.LE,
				total: 3
			},	
			{
				name: Enums.CourseGroupEnum.COMM,
				total: 1
			},	
			{
				name: Enums.CourseGroupEnum.TPM,
				total: 1
			},	
			{
				name: Enums.CourseGroupEnum.WKRPT,
				total: 3
			},	
			{
				name: Enums.CourseGroupEnum.PD,
				total: 5
			},
		]
	},
	{
		programName: Enums.ProgramEnum.SYDE,
		year: [Enums.AcademicYearsEnum[1617],Enums.AcademicYearsEnum[1718],Enums.AcademicYearsEnum[1819],Enums.AcademicYearsEnum[1920]],
		courseGroups: [
			{
				name: Enums.CourseGroupEnum.CEAB,
				total: 2
			},	
			{
				name: Enums.CourseGroupEnum.FREE_RANGE,
				total: 4,
				acceptable: [
					Enums.CourseGroupEnum.CSE_LIST_A,
					Enums.CourseGroupEnum.CSE_LIST_B,
					Enums.CourseGroupEnum.CSE_LIST_C,
					Enums.CourseGroupEnum.CSE_LIST_D,
				]
			},
			{
				name: Enums.CourseGroupEnum.TE,
				total: 6
			},
		]
	},
];