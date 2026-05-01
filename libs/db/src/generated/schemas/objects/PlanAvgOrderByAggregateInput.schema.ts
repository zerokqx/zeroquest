import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  discountedPercent: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  totalGb: SortOrderSchema.optional(),
  inboundId: SortOrderSchema.optional(),
  duratationDays: SortOrderSchema.optional()
}).strict();
export const PlanAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PlanAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanAvgOrderByAggregateInput>;
export const PlanAvgOrderByAggregateInputObjectZodSchema = makeSchema();
