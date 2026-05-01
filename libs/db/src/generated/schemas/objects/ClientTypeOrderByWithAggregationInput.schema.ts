import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ClientTypeCountOrderByAggregateInputObjectSchema as ClientTypeCountOrderByAggregateInputObjectSchema } from './ClientTypeCountOrderByAggregateInput.schema';
import { ClientTypeAvgOrderByAggregateInputObjectSchema as ClientTypeAvgOrderByAggregateInputObjectSchema } from './ClientTypeAvgOrderByAggregateInput.schema';
import { ClientTypeMaxOrderByAggregateInputObjectSchema as ClientTypeMaxOrderByAggregateInputObjectSchema } from './ClientTypeMaxOrderByAggregateInput.schema';
import { ClientTypeMinOrderByAggregateInputObjectSchema as ClientTypeMinOrderByAggregateInputObjectSchema } from './ClientTypeMinOrderByAggregateInput.schema';
import { ClientTypeSumOrderByAggregateInputObjectSchema as ClientTypeSumOrderByAggregateInputObjectSchema } from './ClientTypeSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ClientTypeCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ClientTypeAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ClientTypeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ClientTypeMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ClientTypeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ClientTypeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ClientTypeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientTypeOrderByWithAggregationInput>;
export const ClientTypeOrderByWithAggregationInputObjectZodSchema = makeSchema();
