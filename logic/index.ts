export const allRoles = {
  USER: true,
  STUDENT_COORDINATOR: true,
  FACULTY_COORDINATOR: true,
  MANAGEMENT: true,
} as const;

export type AllRoles = keyof typeof allRoles;

export const allDepartments = {
  NA: true,
  ai: true,
  cs: true,
  cy: true,
  ecs: true,
  ee: true,
  ce: true,
  me: true,
  mca: true,
  es: true,
  ei: true,
} as const; // + "NA" for other users/managements

export type AllDepartments = keyof typeof allDepartments;

export const allYears = {
  NA: true,
  '2021': true,
  '2022': true,
  '2023': true,
  '2024': true,
  '2025': true,
  '2026': true,
  '2027': true,
} as const; // + "NA" for other users/managements

export type AllYears = keyof typeof allYears;

export const endTime = {
  NA: true,
  '1 HOUR': true,
  '2 HOURS': true,
  '4 HOURS': true,
  '6 HOURS': true,
  '8 HOURS': true,
  'HALF DAY': true,
  'ALL DAY': true,
  '2 FULL DAYS': true,
} as const; // + "NA" for other events

export type EndTime = keyof typeof endTime;

/**
 * Asthra starts at
 *
 * Defualt March 3 9:00 AM
 *
 * Mon Mar 04 2024 09:00:00 GMT+0530 (India Standard Time)
 * */
export const AsthraStartsAt = new Date(2024, 2, 4, 9, 0, 0);

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export type College = 'SJCET' | 'NA' | string;

/**
 * Venue example
 *
 * ROOM 303, BLOCK SPB, 2nd FLOOR
 * || Ground
 * || Cafeteria
 * */

/**
 * Prize example
 *
 * ₹1000
 * || Certificate
 * || Stickers & Goodies
 * */
