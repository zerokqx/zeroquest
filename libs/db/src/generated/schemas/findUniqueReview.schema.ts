import type { Prisma } from '../client';
import * as z from 'zod';
import { ReviewSelectObjectSchema as ReviewSelectObjectSchema } from './objects/ReviewSelect.schema';
import { ReviewIncludeObjectSchema as ReviewIncludeObjectSchema } from './objects/ReviewInclude.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './objects/ReviewWhereUniqueInput.schema';

export const ReviewFindUniqueSchema: z.ZodType<Prisma.ReviewFindUniqueArgs> = z.object({ select: ReviewSelectObjectSchema.optional(), include: ReviewIncludeObjectSchema.optional(), where: ReviewWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReviewFindUniqueArgs>;

export const ReviewFindUniqueZodSchema = z.object({ select: ReviewSelectObjectSchema.optional(), include: ReviewIncludeObjectSchema.optional(), where: ReviewWhereUniqueInputObjectSchema }).strict();