import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  content: z.string(),
  rating: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ReviewCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ReviewCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateWithoutUserInput>;
export const ReviewCreateWithoutUserInputObjectZodSchema = makeSchema();
