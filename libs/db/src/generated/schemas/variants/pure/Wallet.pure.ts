import * as z from 'zod';
// prettier-ignore
export const WalletModelSchema = z.object({
    id: z.string(),
    held: z.number().int(),
    balance: z.number().int(),
    user: z.unknown().nullable(),
    walletHistories: z.array(z.unknown())
}).strict();

export type WalletPureType = z.infer<typeof WalletModelSchema>;
