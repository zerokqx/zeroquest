import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  planId: SortOrderSchema.optional(),
  totalGb: SortOrderSchema.optional()
}).strict();
export const SubscribeAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SubscribeAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeAvgOrderByAggregateInput>;
export const SubscribeAvgOrderByAggregateInputObjectZodSchema = makeSchema();
