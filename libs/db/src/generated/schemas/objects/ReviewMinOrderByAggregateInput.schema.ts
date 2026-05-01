import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  rating: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ReviewMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReviewMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewMinOrderByAggregateInput>;
export const ReviewMinOrderByAggregateInputObjectZodSchema = makeSchema();
