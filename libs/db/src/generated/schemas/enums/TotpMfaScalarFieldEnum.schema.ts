import * as z from 'zod';

export const TotpMfaScalarFieldEnumSchema = z.enum(['id', 'enabled', 'ciphertext', 'iv', 'authTag', 'createdAt', 'updatedAt', 'userId'])

export type TotpMfaScalarFieldEnum = z.infer<typeof TotpMfaScalarFieldEnumSchema>;