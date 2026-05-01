import * as z from 'zod';
export const PlanFindFirstResultSchema = z.nullable(z.object({
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
}));