import * as z from 'zod';

export const SessionScalarFieldEnumSchema = z.enum(['id', 'userAgentHash', 'clientTypeId', 'refreshTokenJti', 'accessTokenJti', 'refreshTokenHash', 'expriesAt', 'createdAt', 'userId', 'ipId'])

export type SessionScalarFieldEnum = z.infer<typeof SessionScalarFieldEnumSchema>;