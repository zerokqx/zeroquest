import * as z from 'zod';

export const WalletHistoryScalarFieldEnumSchema = z.enum(['id', 'amount', 'balance', 'type', 'createdAt', 'walletId'])

export type WalletHistoryScalarFieldEnum = z.infer<typeof WalletHistoryScalarFieldEnumSchema>;