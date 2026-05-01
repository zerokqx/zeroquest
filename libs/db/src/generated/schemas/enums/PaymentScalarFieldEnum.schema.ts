import * as z from 'zod';

export const PaymentScalarFieldEnumSchema = z.enum(['id', 'providerPaymentId', 'status', 'currency', 'value', 'idempotenceKey', 'createdAt', 'description', 'userId', 'confirmationUrl', 'planId'])

export type PaymentScalarFieldEnum = z.infer<typeof PaymentScalarFieldEnumSchema>;