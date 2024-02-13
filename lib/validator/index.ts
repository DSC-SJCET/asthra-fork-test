import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { events, users, userRegisteredEvent, cartCheckOut, userCart } from "~/server/db/schema";


export const eventZod = createSelectSchema(events);
export const eventAccessZod = eventZod.omit({
    createdAt: true,
    createdById: true,
    id: true,
    regCount: true,
    updatedAt: true
})
export const userZod = createSelectSchema(users);
export const userAccessZod = userZod.omit({
    createdAt: true,
    id: true,
    emailVerified:true,
    email: true,
    updatedAt: true
})
export const userRegisteredEventZod = createSelectSchema(userRegisteredEvent);
export const cartCheckOutZod = createSelectSchema(cartCheckOut);
export const userCartZod = createSelectSchema(userCart);