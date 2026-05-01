import * as z from 'zod';
export const PaymentFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});