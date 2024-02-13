import { eventRouter } from '~/server/api/routers/event';
import { createTRPCRouter } from '~/server/api/trpc';

import { userRouter } from './routers/userRoute';
import { transactionRouter } from './routers/transaction';
import { cartRouter } from './routers/cart';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter, // put procedures under "user" namespace
  event: eventRouter,
  transaction: transactionRouter,
  cart: cartRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
