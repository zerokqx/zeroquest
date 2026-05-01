import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  content: z.string(),
  rating: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ReviewUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ReviewUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUncheckedCreateWithoutUserInput>;
export const ReviewUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
