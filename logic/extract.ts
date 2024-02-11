import { AllDepartments, AllYears, College } from "./roles";

const regex = /^([a-zA-Z]+)([0-9]{4})@([a-zA-Z]+)\.sjcetpalai\.ac\.in$/;

type SJCETstudent = {
	department: AllDepartments;
	year: AllYears;
	college: College;
};

export const getDataFromMail = (email: string) => {
	const SJCET = email.endsWith("sjcetpalai.ac.in");

	if (SJCET) {
		const match = email.match(regex);
		if (match !== null) {
			const data: SJCETstudent = {
				year: (match[2] as AllYears) ?? "NA",
				department: (match[3] as AllDepartments) ?? "NA",
				college: "SJCET",
			};
			return { SJCET, data };
		}
	}
	return { SJCET };
};
