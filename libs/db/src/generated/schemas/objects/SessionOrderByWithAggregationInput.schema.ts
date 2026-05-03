import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SessionCountOrderByAggregateInputObjectSchema as SessionCountOrderByAggregateInputObjectSchema } from './SessionCountOrderByAggregateInput.schema';
import { SessionAvgOrderByAggregateInputObjectSchema as SessionAvgOrderByAggregateInputObjectSchema } from './SessionAvgOrderByAggregateInput.schema';
import { SessionMaxOrderByAggregateInputObjectSchema as SessionMaxOrderByAggregateInputObjectSchema } from './SessionMaxOrderByAggregateInput.schema';
import { SessionMinOrderByAggregateInputObjectSchema as SessionMinOrderByAggregateInputObjectSchema } from './SessionMinOrderByAggregateInput.schema';
import { SessionSumOrderByAggregateInputObjectSchema as SessionSumOrderByAggregateInputObjectSchema } from './SessionSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userAgentHash: SortOrderSchema.optional(),
  clientTypeId: SortOrderSchema.optional(),
  refreshTokenJti: SortOrderSchema.optional(),
  accessTokenJti: SortOrderSchema.optional(),
  refreshTokenHash: SortOrderSchema.optional(),
  expriesAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  ipId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => SessionCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => SessionAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SessionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SessionMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => SessionSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SessionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SessionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionOrderByWithAggregationInput>;
export const SessionOrderByWithAggregationInputObjectZodSchema = makeSchema();
