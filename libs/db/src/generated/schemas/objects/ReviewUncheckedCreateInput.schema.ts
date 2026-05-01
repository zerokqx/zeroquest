import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  userId: z.string(),
  content: z.string(),
  rating: z.number().int(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ReviewUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ReviewUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUncheckedCreateInput>;
export const ReviewUncheckedCreateInputObjectZodSchema = makeSchema();
