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
export const ReviewMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ReviewMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewMaxOrderByAggregateInput>;
export const ReviewMaxOrderByAggregateInputObjectZodSchema = makeSchema();
