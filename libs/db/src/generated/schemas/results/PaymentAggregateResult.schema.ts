import * as z from 'zod';
export const PaymentAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    providerPaymentId: z.number(),
    status: z.number(),
    currency: z.number(),
    value: z.number(),
    idempotenceKey: z.number(),
    createdAt: z.number(),
    description: z.number(),
    user: z.number(),
    userId: z.number(),
    refund: z.number(),
    confirmationUrl: z.number(),
    plan: z.number(),
    planId: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    value: z.number().nullable(),
    planId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    value: z.number().nullable(),
    planId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    providerPaymentId: z.string().nullable(),
    currency: z.string().nullable(),
    value: z.number().int().nullable(),
    idempotenceKey: z.string().nullable(),
    createdAt: z.date().nullable(),
    description: z.string().nullable(),
    userId: z.string().nullable(),
    confirmationUrl: z.string().nullable(),
    planId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    providerPaymentId: z.string().nullable(),
    currency: z.string().nullable(),
    value: z.number().int().nullable(),
    idempotenceKey: z.string().nullable(),
    createdAt: z.date().nullable(),
    description: z.string().nullable(),
    userId: z.string().nullable(),
    confirmationUrl: z.string().nullable(),
    planId: z.number().int().nullable()
  }).nullable().optional()});