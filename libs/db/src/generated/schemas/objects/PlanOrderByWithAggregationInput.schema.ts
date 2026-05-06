import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PlanCountOrderByAggregateInputObjectSchema as PlanCountOrderByAggregateInputObjectSchema } from './PlanCountOrderByAggregateInput.schema';
import { PlanAvgOrderByAggregateInputObjectSchema as PlanAvgOrderByAggregateInputObjectSchema } from './PlanAvgOrderByAggregateInput.schema';
import { PlanMaxOrderByAggregateInputObjectSchema as PlanMaxOrderByAggregateInputObjectSchema } from './PlanMaxOrderByAggregateInput.schema';
import { PlanMinOrderByAggregateInputObjectSchema as PlanMinOrderByAggregateInputObjectSchema } from './PlanMinOrderByAggregateInput.schema';
import { PlanSumOrderByAggregateInputObjectSchema as PlanSumOrderByAggregateInputObjectSchema } from './PlanSumOrderByAggregateInput.schema'

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
  duratationDays: SortOrderSchema.optional(),
  _count: z.lazy(() => PlanCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => PlanAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => PlanMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => PlanMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => PlanSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const PlanOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.PlanOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanOrderByWithAggregationInput>;
export const PlanOrderByWithAggregationInputObjectZodSchema = makeSchema();
