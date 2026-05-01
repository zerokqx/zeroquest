import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { InboundCountOrderByAggregateInputObjectSchema as InboundCountOrderByAggregateInputObjectSchema } from './InboundCountOrderByAggregateInput.schema';
import { InboundAvgOrderByAggregateInputObjectSchema as InboundAvgOrderByAggregateInputObjectSchema } from './InboundAvgOrderByAggregateInput.schema';
import { InboundMaxOrderByAggregateInputObjectSchema as InboundMaxOrderByAggregateInputObjectSchema } from './InboundMaxOrderByAggregateInput.schema';
import { InboundMinOrderByAggregateInputObjectSchema as InboundMinOrderByAggregateInputObjectSchema } from './InboundMinOrderByAggregateInput.schema';
import { InboundSumOrderByAggregateInputObjectSchema as InboundSumOrderByAggregateInputObjectSchema } from './InboundSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  enable: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  inboundId: SortOrderSchema.optional(),
  _count: z.lazy(() => InboundCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => InboundAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => InboundMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => InboundMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => InboundSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const InboundOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.InboundOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.InboundOrderByWithAggregationInput>;
export const InboundOrderByWithAggregationInputObjectZodSchema = makeSchema();
