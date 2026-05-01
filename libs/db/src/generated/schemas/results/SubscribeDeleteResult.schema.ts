import * as z from 'zod';
export const SubscribeDeleteResultSchema = z.nullable(z.object({
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
}));