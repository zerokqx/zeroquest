import * as z from 'zod';
export const WalletHistoryFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  amount: z.number().int(),
  balance: z.number().int(),
  type: z.unknown(),
  createdAt: z.date(),
  walletId: z.string(),
  wallet: z.unknown()
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