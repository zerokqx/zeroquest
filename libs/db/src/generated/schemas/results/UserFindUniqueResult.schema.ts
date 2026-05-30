import * as z from 'zod';
export const UserFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  login: z.string(),
  telegramId: z.number().int().optional(),
  passwordHash: z.string().optional(),
  subscribes: z.array(z.unknown()),
  isBanned: z.boolean(),
  role: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  payments: z.array(z.unknown()),
  review: z.unknown().optional(),
  canComment: z.boolean(),
  wallet: z.unknown(),
  walletId: z.string(),
  legalAcceptances: z.array(z.unknown()),
  totpMfa: z.unknown().optional()
}));