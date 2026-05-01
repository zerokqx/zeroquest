import * as z from 'zod';

export const SessionScalarFieldEnumSchema = z.enum(['id', 'userAgentHash', 'clientTypeId', 'refreshTokenJti', 'accessTokenJti', 'refreshTokenHash', 'createdAt', 'userId'])

export type SessionScalarFieldEnum = z.infer<typeof SessionScalarFieldEnumSchema>;