import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SubscribeCountOrderByAggregateInputObjectSchema as SubscribeCountOrderByAggregateInputObjectSchema } from './SubscribeCountOrderByAggregateInput.schema';
import { SubscribeAvgOrderByAggregateInputObjectSchema as SubscribeAvgOrderByAggregateInputObjectSchema } from './SubscribeAvgOrderByAggregateInput.schema';
import { SubscribeMaxOrderByAggregateInputObjectSchema as SubscribeMaxOrderByAggregateInputObjectSchema } from './SubscribeMaxOrderByAggregateInput.schema';
import { SubscribeMinOrderByAggregateInputObjectSchema as SubscribeMinOrderByAggregateInputObjectSchema } from './SubscribeMinOrderByAggregateInput.schema';
import { SubscribeSumOrderByAggregateInputObjectSchema as SubscribeSumOrderByAggregateInputObjectSchema } from './SubscribeSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  vlessLink: SortOrderSchema.optional(),
  vlessClientId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  nextPaymentDate: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  planId: SortOrderSchema.optional(),
  totalGb: SortOrderSchema.optional(),
  _count: z.lazy(() => SubscribeCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => SubscribeAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SubscribeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SubscribeMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => SubscribeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SubscribeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SubscribeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeOrderByWithAggregationInput>;
export const SubscribeOrderByWithAggregationInputObjectZodSchema = makeSchema();
