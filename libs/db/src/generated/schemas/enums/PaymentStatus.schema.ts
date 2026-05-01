import * as z from 'zod';

export const PaymentStatusSchema = z.enum(['PENDING', 'PROCESSING', 'WAITING_FOR_CONFIRMATION', 'SUCCEEDED', 'FAILED', 'CANCELED', 'REFUND_PENDING', 'REFUNDED'])

export type PaymentStatus = z.infer<typeof PaymentStatusSchema>;