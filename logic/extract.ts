import { AllDepartments, AllYears, College } from '.';


/**
 * eg: name2025@ai.sjcetpalai.ac.in
 */
const regex = /^([a-zA-Z]+)([0-9]{4})@([a-zA-Z]+)\.sjcetpalai\.ac\.in$/;
/**
 * eg: name2025.ecs@sjcetpalai.ac.in
 */
const otherCases = /^([a-zA-Z]+)([0-9]{4})\.([a-zA-Z]+)@sjcetpalai\.ac\.in$/;

type SJCETstudent = {
  department: AllDepartments;
  year: AllYears;
  college: College;
};

export const getDataFromMail = (email: string) => {
  const SJCET = email.endsWith('sjcetpalai.ac.in');
  
  if (SJCET) {
    const match = email.match(regex);

    if (match !== null) {
      const data: SJCETstudent = {
        year: (match[2] as AllYears) ?? 'NA',
        department: (match[3] as AllDepartments) ?? 'NA',
        college: 'SJCET',
      };
      return { SJCET, data };
    }
    else {
      const otherMatch = email.match(otherCases);

      if (otherMatch !== null) {
        const data: SJCETstudent = {
          year: (otherMatch[2] as AllYears) ?? 'NA',
          department: (otherMatch[3] as AllDepartments) ?? 'NA',
          college: 'SJCET',
        };
        return { SJCET, data };
      }

    }
  }
  return { SJCET };
};
