import * as z from 'zod';
import { WalletHistoryTypeSchema } from '../../enums/WalletHistoryType.schema';
// prettier-ignore
export const WalletHistoryInputSchema = z.object({
    id: z.string(),
    amount: z.number().int(),
    balance: z.number().int(),
    type: WalletHistoryTypeSchema,
    createdAt: z.date(),
    walletId: z.string(),
    wallet: z.unknown()
}).strict();

export type WalletHistoryInputType = z.infer<typeof WalletHistoryInputSchema>;
