import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RefundCountOrderByAggregateInputObjectSchema as RefundCountOrderByAggregateInputObjectSchema } from './RefundCountOrderByAggregateInput.schema';
import { RefundAvgOrderByAggregateInputObjectSchema as RefundAvgOrderByAggregateInputObjectSchema } from './RefundAvgOrderByAggregateInput.schema';
import { RefundMaxOrderByAggregateInputObjectSchema as RefundMaxOrderByAggregateInputObjectSchema } from './RefundMaxOrderByAggregateInput.schema';
import { RefundMinOrderByAggregateInputObjectSchema as RefundMinOrderByAggregateInputObjectSchema } from './RefundMinOrderByAggregateInput.schema';
import { RefundSumOrderByAggregateInputObjectSchema as RefundSumOrderByAggregateInputObjectSchema } from './RefundSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  paymentId: SortOrderSchema.optional(),
  _count: z.lazy(() => RefundCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => RefundAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => RefundMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => RefundMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => RefundSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const RefundOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.RefundOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.RefundOrderByWithAggregationInput>;
export const RefundOrderByWithAggregationInputObjectZodSchema = makeSchema();
