import * as z from 'zod';

export const SubscribeScalarFieldEnumSchema = z.enum(['id', 'name', 'vlessLink', 'vlessClientId', 'userId', 'email', 'nextPaymentDate', 'status', 'expiresAt', 'createdAt', 'updatedAt', 'planId', 'totalGb'])

export type SubscribeScalarFieldEnum = z.infer<typeof SubscribeScalarFieldEnumSchema>;