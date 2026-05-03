import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { IpCountOrderByAggregateInputObjectSchema as IpCountOrderByAggregateInputObjectSchema } from './IpCountOrderByAggregateInput.schema';
import { IpAvgOrderByAggregateInputObjectSchema as IpAvgOrderByAggregateInputObjectSchema } from './IpAvgOrderByAggregateInput.schema';
import { IpMaxOrderByAggregateInputObjectSchema as IpMaxOrderByAggregateInputObjectSchema } from './IpMaxOrderByAggregateInput.schema';
import { IpMinOrderByAggregateInputObjectSchema as IpMinOrderByAggregateInputObjectSchema } from './IpMinOrderByAggregateInput.schema';
import { IpSumOrderByAggregateInputObjectSchema as IpSumOrderByAggregateInputObjectSchema } from './IpSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  ip: SortOrderSchema.optional(),
  rangeLow: SortOrderSchema.optional(),
  rangeHigh: SortOrderSchema.optional(),
  country: SortOrderSchema.optional(),
  region: SortOrderSchema.optional(),
  eu: SortOrderSchema.optional(),
  timezone: SortOrderSchema.optional(),
  city: SortOrderSchema.optional(),
  ll: SortOrderSchema.optional(),
  metro: SortOrderSchema.optional(),
  area: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => IpCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => IpAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => IpMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => IpMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => IpSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const IpOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.IpOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.IpOrderByWithAggregationInput>;
export const IpOrderByWithAggregationInputObjectZodSchema = makeSchema();
