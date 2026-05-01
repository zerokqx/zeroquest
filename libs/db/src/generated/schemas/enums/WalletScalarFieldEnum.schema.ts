import * as z from 'zod';

export const WalletScalarFieldEnumSchema = z.enum(['id', 'held', 'balance'])

export type WalletScalarFieldEnum = z.infer<typeof WalletScalarFieldEnumSchema>;