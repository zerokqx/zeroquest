import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  discountedPercent: z.literal(true).optional(),
  price: z.literal(true).optional(),
  totalGb: z.literal(true).optional(),
  inboundId: z.literal(true).optional(),
  duratationDays: z.literal(true).optional()
}).strict();
export const PlanSumAggregateInputObjectSchema: z.ZodType<Prisma.PlanSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PlanSumAggregateInputType>;
export const PlanSumAggregateInputObjectZodSchema = makeSchema();
