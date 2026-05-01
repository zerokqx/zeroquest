import * as z from 'zod';
import { RefundStatusSchema } from '../../enums/RefundStatus.schema';
// prettier-ignore
export const RefundInputSchema = z.object({
    id: z.number().int(),
    status: RefundStatusSchema,
    payment: z.unknown(),
    paymentId: z.number().int()
}).strict();

export type RefundInputType = z.infer<typeof RefundInputSchema>;
