import * as z from 'zod';
export const UserFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  login: z.string(),
  telegramId: z.number().int().optional(),
  passwordHash: z.string(),
  subscribes: z.array(z.unknown()),
  isBanned: z.boolean(),
  role: z.unknown().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  payments: z.array(z.unknown()),
  sessions: z.array(z.unknown()),
  review: z.unknown().optional(),
  canComment: z.boolean(),
  wallet: z.unknown(),
  walletId: z.string(),
  legalAcceptances: z.array(z.unknown())
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