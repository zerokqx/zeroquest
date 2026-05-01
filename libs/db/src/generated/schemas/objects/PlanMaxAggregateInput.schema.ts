import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  isSpecial: z.literal(true).optional(),
  discountedPercent: z.literal(true).optional(),
  features: z.literal(true).optional(),
  price: z.literal(true).optional(),
  description: z.literal(true).optional(),
  totalGb: z.literal(true).optional(),
  inboundId: z.literal(true).optional(),
  duratationDays: z.literal(true).optional()
}).strict();
export const PlanMaxAggregateInputObjectSchema: z.ZodType<Prisma.PlanMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PlanMaxAggregateInputType>;
export const PlanMaxAggregateInputObjectZodSchema = makeSchema();
