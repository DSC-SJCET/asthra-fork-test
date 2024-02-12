import { z } from 'zod';
import { eventAccessZod, eventZod } from '~/lib/validator';

import { createTRPCRouter, protectedProcedure, publicProcedure } from '~/server/api/trpc';
import { events, userRegisteredEvent } from '~/server/db/schema';
import { v4 as uuidv4 } from 'uuid';



export const eventRouter = createTRPCRouter({
  create: protectedProcedure
  .input(eventAccessZod.optional())
  .mutation(async ({ ctx, input }) => {
    await ctx.db.insert(events).values({
      department: ctx.session.user.department ?? 'NA',
      createdById: ctx.session.user.id,
      ...input,
      id: uuidv4(),
    });
  }),

  updateEvent: protectedProcedure
  .input(eventAccessZod)
  .mutation(async ({ ctx, input }) => {
    await ctx.db.update(events).set({
      ...input
    });
  }),

  uploadImage: protectedProcedure
  .input(eventZod.pick({
    banner:true,
    poster:true
  }))
  .mutation(async ({ ctx, input }) => {    
    await ctx.db.update(events).set({
      ...input
    });
  }),

  register: protectedProcedure.input(z.object({ id: z.string() })).mutation(async ({ ctx, input }) => {
    await ctx.db.insert(userRegisteredEvent).values({
      userId: ctx.session.user.id,
      eventId: input.id,
    });
  }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.events.findFirst({
      orderBy: (events, { desc }) => [desc(events.createdAt)],
    });
  }),
});
