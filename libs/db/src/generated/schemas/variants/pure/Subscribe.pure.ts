import * as z from 'zod';
import { SubscribeStatusSchema } from '../../enums/SubscribeStatus.schema';
// prettier-ignore
export const SubscribeModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    vlessLink: z.string(),
    user: z.unknown(),
    vlessClientId: z.string(),
    userId: z.string(),
    email: z.string(),
    nextPaymentDate: z.date(),
    status: SubscribeStatusSchema,
    expiresAt: z.date(),
    createdAt: z.date(),
    updatedAt: z.date(),
    plan: z.unknown(),
    planId: z.number().int(),
    totalGb: z.number().int()
}).strict();

export type SubscribePureType = z.infer<typeof SubscribeModelSchema>;
