import { arrayOverlaps, eq } from "drizzle-orm";
import { z } from "zod";
import { cartCheckOutZod, eventZod } from "~/lib/validator";

import {
  createTRPCRouter,
  protectedProcedure
} from "~/server/api/trpc";
import {
  cartCheckOut,
  events,
  userCart,
  userRegisteredEvent,
} from "~/server/db/schema";

export const transactionRouter = createTRPCRouter({

	paymentInitiated: protectedProcedure
		.input(
			cartCheckOutZod.pick({
				transactionId: true,
			}),
		)
		.mutation(async ({ ctx, input }) => {
			await ctx.db.transaction(async (tx) => {
				// const currentCartList = await tx
				// 	.select()
				// 	.from(userCart)
				// 	.where(eq(userCart.userId, ctx.session.user.id));

				const currentCartList = await tx
					.query.userCart.findMany({
            where: eq(userCart.userId, ctx.session.user.id),
            with: {
              events: {
                name:true,
                id: true
              },

            }

          })

				if (currentCartList.length <= 0) return; // make suitable error case

				// const eventIds = currentCartList.map((c) => c.eventId);
				const extireEventsOnCart = currentCartList.map((c) => c.events) as z.infer<typeof eventZod>[]

				// const extireEventsOnCart = await tx
				// 	.select({
				// 		name: events.name,
        //     id: events.id
				// 	})
				// 	.from(events)
        //   // ts-ignore
				// 	.where(arrayOverlaps(events.id, eventIds));

				await tx.insert(cartCheckOut).values({
					eventIds: extireEventsOnCart.map((e) => e.id).join("|"),
					eventNames: extireEventsOnCart.map((e) => e.name).join("|"),
					...input,
					userId: ctx.session.user.id,
				});
			});
		}),

	eventRegistered: protectedProcedure
		.input(cartCheckOutZod.pick({
      transactionId:true
    }))
		.mutation(async ({ ctx, input }) => {
			/**
			 * Payment logic here
			 * only if success, allow run below code
			 */
			type CartDone = {
				eventNames: string | null;
				eventIds: string | null;
				transactionId: string | null;
				remark: string | null;
			};

			await ctx.db.transaction(async (tx) => {
				const cartDoneArray: CartDone[] = await tx
					.update(cartCheckOut)
					.set({ status: "success" })
					.where(eq(cartCheckOut.transactionId, input.transactionId))
					.returning({
						eventNames: cartCheckOut.eventNames,
						eventIds: cartCheckOut.eventIds,
						transactionId: cartCheckOut.transactionId,
						remark: cartCheckOut.remark,
					});

				const eventIds = cartDoneArray[0]?.eventIds?.split("|");
				const transactionId = cartDoneArray[0]?.transactionId;
				const remark = cartDoneArray[0]?.remark;
				const userId = ctx.session.user.id;

				if (eventIds && transactionId) {
					const arrayOfEventValues = eventIds.map((singleEventId) => ({
						eventId: singleEventId,
						userId,
						transactionId,
						remark,
					}));

					await tx.insert(userRegisteredEvent).values(arrayOfEventValues);
					await tx
						.delete(userCart)
						.where(eq(userCart.userId, ctx.session.user.id));
				} else
					console.warn("Put some transation id and warning with error control");
			});
		}),
});
