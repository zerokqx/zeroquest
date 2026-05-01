import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'login', 'telegramId', 'passwordHash', 'isBanned', 'role', 'createdAt', 'updatedAt', 'canComment', 'walletId'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;