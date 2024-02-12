import type { UserListType } from '~/server/db/schema';

export const userdata: UserListType[] = Array.from({ length: 50 }, (_, index) => ({
  id: `user${index + 1}_id`,
  name: `User${index + 1}`,
  emailVerified: null,
  image: `profile_picture${index + 1}.jpg`,
  role: index % 2 === 0 ? 'USER' : 'MANAGEMENT',
  department: index % 3 === 0 ? 'cs' : 'ee',
  year: index % 4 === 0 ? '2023' : '2024',
  email: `user${index + 1}@example.com`,
  number: `+123456789${index}`,
  college: index % 5 === 0 ? 'MIT' : 'Harvard',
}));
