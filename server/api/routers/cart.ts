import { and, eq } from "drizzle-orm";
import { userCartZod } from "~/lib/validator";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { userCart } from "~/server/db/schema";

export const cartRouter = createTRPCRouter({
	getCartData: protectedProcedure.query(({ ctx }) => {
		return ctx.db.query.userCart.findMany({
			where: (userCart, { eq }) => eq(userCart.userId, ctx.session.user.id),
			with: {
				cartCheckOut: true,
			},
		});
	}),

	getTransactions: protectedProcedure.query(({ ctx }) => {
		return ctx.db.query.cartCheckOut.findMany({
			where: (cartCheckOut, { eq }) =>
				eq(cartCheckOut.userId, ctx.session.user.id),
		});
	}),

	addToCart: protectedProcedure
		.input(
			userCartZod.pick({
				eventId: true,
			}),
		)
		.mutation(async ({ ctx, input }) => {
			return await ctx.db.insert(userCart).values({
				userId: ctx.session.user.id,
				eventId: input.eventId,
			});
		}),

	clearCart: protectedProcedure
		.input(
			userCartZod.pick({
				eventId: true,
			}),
		)
		.mutation(async ({ ctx, input }) => {
			await ctx.db
				.delete(userCart)
				.where(
					and(
						eq(userCart.eventId, input.eventId),
						eq(userCart.userId, ctx.session.user.id),
					),
				);
		}),

	clearEntireCart: protectedProcedure.mutation(async ({ ctx }) => {
		await ctx.db
			.delete(userCart)
			.where(eq(userCart.userId, ctx.session.user.id));
	}),
});
