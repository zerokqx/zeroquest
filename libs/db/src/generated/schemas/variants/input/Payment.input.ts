import * as z from 'zod';
import { PaymentStatusSchema } from '../../enums/PaymentStatus.schema';
// prettier-ignore
export const PaymentInputSchema = z.object({
    id: z.number().int(),
    providerPaymentId: z.string(),
    status: PaymentStatusSchema,
    currency: z.string(),
    value: z.number().int(),
    idempotenceKey: z.string(),
    createdAt: z.date(),
    description: z.string().optional().nullable(),
    user: z.unknown(),
    userId: z.string(),
    refund: z.unknown().optional().nullable(),
    confirmationUrl: z.string(),
    plan: z.unknown().optional().nullable(),
    planId: z.number().int().optional().nullable()
}).strict();

export type PaymentInputType = z.infer<typeof PaymentInputSchema>;
