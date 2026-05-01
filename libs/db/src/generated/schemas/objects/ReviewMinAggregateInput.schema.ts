import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  content: z.literal(true).optional(),
  rating: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ReviewMinAggregateInputObjectSchema: z.ZodType<Prisma.ReviewMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReviewMinAggregateInputType>;
export const ReviewMinAggregateInputObjectZodSchema = makeSchema();
