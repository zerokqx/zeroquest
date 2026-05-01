import * as z from 'zod';
export const RefundGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  paymentId: z.number().int(),
  _count: z.object({
    id: z.number(),
    status: z.number(),
    payment: z.number(),
    paymentId: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    paymentId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    paymentId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    paymentId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    paymentId: z.number().int().nullable()
  }).nullable().optional()
}));