import * as z from 'zod';
export const SubscribeFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  name: z.string(),
  vlessLink: z.string(),
  user: z.unknown(),
  vlessClientId: z.string(),
  userId: z.string(),
  email: z.string(),
  nextPaymentDate: z.date(),
  status: z.unknown(),
  expiresAt: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
  plan: z.unknown(),
  planId: z.number().int(),
  totalGb: z.number().int()
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