import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  rating: SortOrderSchema.optional()
}).strict();
export const ReviewAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReviewAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewAvgOrderByAggregateInput>;
export const ReviewAvgOrderByAggregateInputObjectZodSchema = makeSchema();
