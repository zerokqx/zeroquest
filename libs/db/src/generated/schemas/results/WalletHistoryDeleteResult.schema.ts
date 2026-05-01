import * as z from 'zod';
export const WalletHistoryDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  amount: z.number().int(),
  balance: z.number().int(),
  type: z.unknown(),
  createdAt: z.date(),
  walletId: z.string(),
  wallet: z.unknown()
}));