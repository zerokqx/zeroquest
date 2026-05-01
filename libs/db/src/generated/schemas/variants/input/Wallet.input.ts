import * as z from 'zod';
// prettier-ignore
export const WalletInputSchema = z.object({
    id: z.string(),
    held: z.number().int(),
    balance: z.number().int(),
    user: z.unknown().optional().nullable(),
    walletHistories: z.array(z.unknown())
}).strict();

export type WalletInputType = z.infer<typeof WalletInputSchema>;
