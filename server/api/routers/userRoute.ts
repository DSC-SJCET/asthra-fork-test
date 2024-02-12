// import { sql } from "drizzle-orm";

import { userdata } from "~/lib/data/users";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { env } from "~/env";

export const userRouter = createTRPCRouter({
  userList: publicProcedure.query(async ({ ctx }) => {
    try {
      let userListData;
      if (env.NODE_ENV === "development") {
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
