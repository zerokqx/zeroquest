import type { Prisma } from '../client';
import * as z from 'zod';
import { ReviewCreateManyInputObjectSchema as ReviewCreateManyInputObjectSchema } from './objects/ReviewCreateManyInput.schema';

export const ReviewCreateManySchema: z.ZodType<Prisma.ReviewCreateManyArgs> = z.object({ data: z.union([ ReviewCreateManyInputObjectSchema, z.array(ReviewCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ReviewCreateManyArgs>;

export const ReviewCreateManyZodSchema = z.object({ data: z.union([ ReviewCreateManyInputObjectSchema, z.array(ReviewCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();