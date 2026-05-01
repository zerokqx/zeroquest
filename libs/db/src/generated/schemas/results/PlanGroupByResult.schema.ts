import * as z from 'zod';
export const PlanGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  name: z.string(),
  isSpecial: z.boolean(),
  discountedPercent: z.number(),
  features: z.string(),
  price: z.number().int(),
  description: z.string(),
  totalGb: z.number().int(),
  inboundId: z.number().int(),
  duratationDays: z.number().int(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    isSpecial: z.number(),
    discountedPercent: z.number(),
    features: z.number(),
    price: z.number(),
    description: z.number(),
    totalGb: z.number(),
    payments: z.number(),
    subscribes: z.number(),
    inbound: z.number(),
    inboundId: z.number(),
    duratationDays: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    discountedPercent: z.number().nullable(),
    price: z.number().nullable(),
    totalGb: z.number().nullable(),
    inboundId: z.number().nullable(),
    duratationDays: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    discountedPercent: z.number().nullable(),
    price: z.number().nullable(),
    totalGb: z.number().nullable(),
    inboundId: z.number().nullable(),
    duratationDays: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    discountedPercent: z.number().nullable(),
    features: z.string().nullable(),
    price: z.number().int().nullable(),
    description: z.string().nullable(),
    totalGb: z.number().int().nullable(),
    inboundId: z.number().int().nullable(),
    duratationDays: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    discountedPercent: z.number().nullable(),
    features: z.string().nullable(),
    price: z.number().int().nullable(),
    description: z.string().nullable(),
    totalGb: z.number().int().nullable(),
    inboundId: z.number().int().nullable(),
    duratationDays: z.number().int().nullable()
  }).nullable().optional()
}));