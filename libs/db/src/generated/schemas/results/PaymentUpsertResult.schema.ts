import * as z from 'zod';
export const PaymentUpsertResultSchema = z.object({
  id: z.number().int(),
  providerPaymentId: z.string(),
  status: z.unknown(),
  currency: z.string(),
  value: z.number().int(),
  idempotenceKey: z.string(),
  createdAt: z.date(),
  description: z.string().optional(),
  user: z.unknown(),
  userId: z.string(),
  refund: z.unknown().optional(),
  confirmationUrl: z.string(),
  plan: z.unknown().optional(),
  planId: z.number().int().optional()
});