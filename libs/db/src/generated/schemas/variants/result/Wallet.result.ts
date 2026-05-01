import * as z from 'zod';
// prettier-ignore
export const WalletResultSchema = z.object({
    id: z.string(),
    held: z.number().int(),
    balance: z.number().int(),
    user: z.unknown().nullable(),
    walletHistories: z.array(z.unknown())
}).strict();

export type WalletResultType = z.infer<typeof WalletResultSchema>;
