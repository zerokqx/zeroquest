import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const ClientTypeAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ClientTypeAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientTypeAvgOrderByAggregateInput>;
export const ClientTypeAvgOrderByAggregateInputObjectZodSchema = makeSchema();
