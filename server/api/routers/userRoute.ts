// import { sql } from "drizzle-orm";

import { userdata } from '~/lib/data/users';

import { createTRPCRouter, publicProcedure } from '../trpc';

export const userRouter = createTRPCRouter({
  userList: publicProcedure.query(async ({ ctx }) => {
    const env = process.env.NODE_ENV;
    try {
      let userListData;
      if (env === 'development') {
        userListData = userdata;
      } else {
        userListData = await ctx.db.query.users.findMany();
      }
      return userListData;
    } catch (error) {
      throw new Error('Error fetching users');
    }
  }),
});
