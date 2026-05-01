import * as z from 'zod';
import { PaymentStatusSchema } from '../../enums/PaymentStatus.schema';
// prettier-ignore
export const PaymentModelSchema = z.object({
    id: z.number().int(),
    providerPaymentId: z.string(),
    status: PaymentStatusSchema,
    currency: z.string(),
    value: z.number().int(),
    idempotenceKey: z.string(),
    createdAt: z.date(),
    description: z.string().nullable(),
    user: z.unknown(),
    userId: z.string(),
    refund: z.unknown().nullable(),
    confirmationUrl: z.string(),
    plan: z.unknown().nullable(),
    planId: z.number().int().nullable()
}).strict();

export type PaymentPureType = z.infer<typeof PaymentModelSchema>;
