import type { Prisma } from '../client';
import * as z from 'zod';
import { ReviewSelectObjectSchema as ReviewSelectObjectSchema } from './objects/ReviewSelect.schema';
import { ReviewCreateManyInputObjectSchema as ReviewCreateManyInputObjectSchema } from './objects/ReviewCreateManyInput.schema';

export const ReviewCreateManyAndReturnSchema: z.ZodType<Prisma.ReviewCreateManyAndReturnArgs> = z.object({ select: ReviewSelectObjectSchema.optional(), data: z.union([ ReviewCreateManyInputObjectSchema, z.array(ReviewCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ReviewCreateManyAndReturnArgs>;

export const ReviewCreateManyAndReturnZodSchema = z.object({ select: ReviewSelectObjectSchema.optional(), data: z.union([ ReviewCreateManyInputObjectSchema, z.array(ReviewCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();