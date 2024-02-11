import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { events, userRegisteredEvent } from "~/server/db/schema";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1), id:z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {

      await ctx.db.insert(events).values({
        name: input.name,
        createdById: ctx.session.user.id,
        department: ctx.session.user.department,
        id: input.id
      });
    }),

  register: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {

      await ctx.db.insert(userRegisteredEvent).values({
        userId: "eswrdcfvgasd",
        eventId: "eswrdcfvgasd"
      })
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.events.findFirst({
      orderBy: (events, { desc }) => [desc(events.createdAt)],
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
