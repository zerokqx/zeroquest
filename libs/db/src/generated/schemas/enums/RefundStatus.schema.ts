import * as z from 'zod';

export const RefundStatusSchema = z.enum(['PENDING', 'APPROVE', 'REJECTED'])

export type RefundStatus = z.infer<typeof RefundStatusSchema>;