import * as z from 'zod';
export const PlanFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  name: z.string(),
  isSpecial: z.boolean(),
  discountedPercent: z.number(),
  features: z.string().optional(),
  price: z.number().int(),
  description: z.string().optional(),
  totalGb: z.number().int(),
  payments: z.array(z.unknown()),
  subscribes: z.array(z.unknown()),
  inbound: z.unknown(),
  inboundId: z.number().int(),
  duratationDays: z.number().int()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});