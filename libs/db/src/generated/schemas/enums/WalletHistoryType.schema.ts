import * as z from 'zod';

export const WalletHistoryTypeSchema = z.enum(['CREDIT', 'DEBIT', 'BONUS', 'REFUND'])

export type WalletHistoryType = z.infer<typeof WalletHistoryTypeSchema>;