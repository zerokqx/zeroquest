import * as z from 'zod';

export const TotpTokenScalarFieldEnumSchema = z.enum(['id', 'enabled', 'ciphertext', 'iv', 'authTag', 'createdAt', 'updatedAt', 'userId'])

export type TotpTokenScalarFieldEnum = z.infer<typeof TotpTokenScalarFieldEnumSchema>;