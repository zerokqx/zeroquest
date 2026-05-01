import * as z from 'zod';
export const WalletUpsertResultSchema = z.object({
  id: z.string(),
  held: z.number().int(),
  balance: z.number().int(),
  user: z.unknown().optional(),
  walletHistories: z.array(z.unknown())
});