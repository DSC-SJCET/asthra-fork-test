import { eventAccessZod, eventZod } from "~/lib/validator";

import { v4 as uuidv4 } from "uuid";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { events } from "~/server/db/schema";

export const eventRouter = createTRPCRouter({
	createEvent: protectedProcedure
		.input(eventAccessZod.optional())
		.mutation(async ({ ctx, input }) => {
			await ctx.db.insert(events).values({
				department: ctx.session.user.department ?? "NA",
				createdById: ctx.session.user.id,
				...input,
				id: uuidv4(),
			});
		}),

	updateEvent: protectedProcedure
		.input(eventAccessZod)
		.mutation(async ({ ctx, input }) => {
			await ctx.db.update(events).set({
				...input,
			});
		}),

	uploadEventImage: protectedProcedure
		.input(
			eventZod.pick({
				banner: true,
				poster: true,
				certificate: true,
			}),
		)
		.mutation(async ({ ctx, input }) => {
			await ctx.db.update(events).set({
				...input,
			});
		}),

  	getLatest: publicProcedure.query(({ ctx }) => {
		return ctx.db.query.events.findFirst({
			orderBy: (events, { desc }) => [desc(events.createdAt)],
		});
	}),
});
