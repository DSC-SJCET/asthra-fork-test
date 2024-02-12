import { relations, sql, type InferSelectModel } from "drizzle-orm";
import {
  index,
  integer,
  pgTable as createTable,
  primaryKey,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { type AdapterAccount } from "next-auth/adapters";
import { departmentEnum, endTimeEnum, roleEnum, yearEnum } from "./enum";
import { type College, AsthraStartsAt } from "~/logic/roles";

export const userRegisteredEvent = createTable('userRegisteredEvent', {
  userId: varchar('user_id', { length: 255 })
    .notNull()
    .references(() => users.id),
  eventId: varchar('eventId', { length: 255 })
    .notNull()
    .references(() => events.id),
});

export const events = createTable(
  'event',
  {
    id: varchar('id', { length: 255 }).notNull().primaryKey(),
    name: varchar('name', { length: 256 }),
    description: text('description'), // anything bla bla bla
    poster: varchar('image', { length: 255 }),
    banner: varchar('image', { length: 255 }),

    createdAt: timestamp('created_at')
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp('updatedAt'),

    createdById: varchar('createdById', { length: 255 })
      .notNull()
      .references(() => users.id),
    department: departmentEnum('department')
      .notNull()
      .references(() => users.department),

    venue: text('venue'), // ROOM 303, BLOCK SPB, 2nd FLOOR
    dateTimeStarts: timestamp('dateTimeStarts').notNull().default(AsthraStartsAt),
    dateTimeEnd: endTimeEnum('endTime').default('ALL DAY'),

    regCount: integer('int').default(0),
  },
  (example) => ({
    createdByIdIdx: index('createdById_idx').on(example.createdById),
    nameIndex: index('name_idx').on(example.name),
    createdByDepartmentIdx: index('createdByDepartmentIdx').on(example.department),
  }),
);

export const users = createTable('user', {
  id: varchar('id', { length: 255 }).notNull().primaryKey(),
  name: varchar('name', { length: 255 }),

  emailVerified: timestamp('emailVerified', {
    mode: 'date',
  }).default(sql`CURRENT_TIMESTAMP`),
  image: varchar('image', { length: 255 }),

  role: roleEnum('role').default('USER'),
  department: departmentEnum('department').default('NA'),
  year: yearEnum('year').default('NA'),

  email: varchar('email', { length: 255 }).notNull(),
  number: varchar('number', { length: 15 }),
  college: varchar('college', { length: 255 }).$type<College>().default('NA'),
});

export type UserListTypeOmit = InferSelectModel<typeof users>;

export type UserListType = InferSelectModel<typeof users>;

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
}));

export const accounts = createTable(
  'account',
  {
    userId: varchar('userId', { length: 255 })
      .notNull()
      .references(() => users.id),
    type: varchar('type', { length: 255 }).$type<AdapterAccount['type']>().notNull(),
    provider: varchar('provider', { length: 255 }).notNull(),
    providerAccountId: varchar('providerAccountId', { length: 255 }).notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: varchar('token_type', { length: 255 }),
    scope: varchar('scope', { length: 255 }),
    id_token: text('id_token'),
    session_state: varchar('session_state', { length: 255 }),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
    userIdIdx: index('account_userId_idx').on(account.userId),
  }),
);

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, { fields: [accounts.userId], references: [users.id] }),
}));

export const sessions = createTable(
  'session',
  {
    sessionToken: varchar('sessionToken', { length: 255 }).notNull().primaryKey(),
    userId: varchar('userId', { length: 255 })
      .notNull()
      .references(() => users.id),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  (session) => ({
    userIdIdx: index('session_userId_idx').on(session.userId),
  }),
);

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
}));

export const verificationTokens = createTable(
  'verificationToken',
  {
    identifier: varchar('identifier', { length: 255 }).notNull(),
    token: varchar('token', { length: 255 }).notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  }),
);
