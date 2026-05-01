import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  planId: SortOrderSchema.optional(),
  totalGb: SortOrderSchema.optional()
}).strict();
export const SubscribeSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SubscribeSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeSumOrderByAggregateInput>;
export const SubscribeSumOrderByAggregateInputObjectZodSchema = makeSchema();
