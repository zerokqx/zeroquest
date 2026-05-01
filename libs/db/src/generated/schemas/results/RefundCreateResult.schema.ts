import * as z from 'zod';
export const RefundCreateResultSchema = z.object({
  id: z.number().int(),
  status: z.unknown(),
  payment: z.unknown(),
  paymentId: z.number().int()
});