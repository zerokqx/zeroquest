import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  rating: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ReviewOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ReviewOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewOrderByWithRelationInput>;
export const ReviewOrderByWithRelationInputObjectZodSchema = makeSchema();
