import { pgEnum } from "drizzle-orm/pg-core";
import { AllDepartments, AllRoles, AllYears, AsthraStartsAt, EndTime, allDepartments, allRoles, allYears, endTime } from "~/logic/roles";

export const roleEnum = pgEnum("role", [
	"USER",
	...(Object.keys(allRoles) as AllRoles[]),
]);
export const departmentEnum = pgEnum("department", [
	"NA",
	...(Object.keys(allDepartments) as AllDepartments[]), // ai, cs, eee, mca, etc
]);

export const yearEnum = pgEnum("year", [
	"NA",
	...(Object.keys(allYears) as AllYears[]), // 2021, 2022, ...2027
]);

export const endTimeEnum = pgEnum("endTime", [
	"NA",
	...(Object.keys(endTime) as EndTime[]), // 2021, 2022, ...2027
]);