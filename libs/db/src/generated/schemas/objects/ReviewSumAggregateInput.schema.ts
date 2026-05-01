import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  rating: z.literal(true).optional()
}).strict();
export const ReviewSumAggregateInputObjectSchema: z.ZodType<Prisma.ReviewSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ReviewSumAggregateInputType>;
export const ReviewSumAggregateInputObjectZodSchema = makeSchema();
