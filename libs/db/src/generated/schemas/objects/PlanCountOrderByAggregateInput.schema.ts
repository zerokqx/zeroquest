import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  isSpecial: SortOrderSchema.optional(),
  discountedPercent: SortOrderSchema.optional(),
  features: SortOrderSchema.optional(),
  price: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  totalGb: SortOrderSchema.optional(),
  inboundId: SortOrderSchema.optional(),
  duratationDays: SortOrderSchema.optional()
}).strict();
export const PlanCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.PlanCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanCountOrderByAggregateInput>;
export const PlanCountOrderByAggregateInputObjectZodSchema = makeSchema();
