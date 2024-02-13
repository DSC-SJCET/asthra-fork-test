import { departmentEnum, roleEnum, yearEnum } from "./schema";

export type ExtraData = {
	role?: (typeof roleEnum)["enumValues"][number];
	department?: (typeof departmentEnum)["enumValues"][number];
	year?: (typeof yearEnum)["enumValues"][number];
	college?: string;
};
