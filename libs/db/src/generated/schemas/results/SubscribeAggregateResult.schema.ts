import * as z from 'zod';
export const SubscribeAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    vlessLink: z.number(),
    user: z.number(),
    vlessClientId: z.number(),
    userId: z.number(),
    email: z.number(),
    nextPaymentDate: z.number(),
    status: z.number(),
    expiresAt: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    plan: z.number(),
    planId: z.number(),
    totalGb: z.number()
  }).optional(),
  _sum: z.object({
    planId: z.number().nullable(),
    totalGb: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    planId: z.number().nullable(),
    totalGb: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    vlessLink: z.string().nullable(),
    vlessClientId: z.string().nullable(),
    userId: z.string().nullable(),
    email: z.string().nullable(),
    nextPaymentDate: z.date().nullable(),
    expiresAt: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    planId: z.number().int().nullable(),
    totalGb: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    vlessLink: z.string().nullable(),
    vlessClientId: z.string().nullable(),
    userId: z.string().nullable(),
    email: z.string().nullable(),
    nextPaymentDate: z.date().nullable(),
    expiresAt: z.date().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    planId: z.number().int().nullable(),
    totalGb: z.number().int().nullable()
  }).nullable().optional()});