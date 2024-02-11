import { postRouter } from "~/server/api/routers/event";
import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "./routers/userRoute";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter, // put procedures under "user" namespace
  post: postRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
