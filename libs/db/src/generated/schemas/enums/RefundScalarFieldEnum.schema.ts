import * as z from 'zod';

export const RefundScalarFieldEnumSchema = z.enum(['id', 'status', 'paymentId'])

export type RefundScalarFieldEnum = z.infer<typeof RefundScalarFieldEnumSchema>;