import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  userId: z.string(),
  content: z.string(),
  rating: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ReviewCreateManyInputObjectSchema: z.ZodType<Prisma.ReviewCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateManyInput>;
export const ReviewCreateManyInputObjectZodSchema = makeSchema();
