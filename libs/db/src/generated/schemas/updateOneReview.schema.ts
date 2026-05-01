import type { Prisma } from '../client';
import * as z from 'zod';
import { ReviewSelectObjectSchema as ReviewSelectObjectSchema } from './objects/ReviewSelect.schema';
import { ReviewIncludeObjectSchema as ReviewIncludeObjectSchema } from './objects/ReviewInclude.schema';
import { ReviewUpdateInputObjectSchema as ReviewUpdateInputObjectSchema } from './objects/ReviewUpdateInput.schema';
import { ReviewUncheckedUpdateInputObjectSchema as ReviewUncheckedUpdateInputObjectSchema } from './objects/ReviewUncheckedUpdateInput.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './objects/ReviewWhereUniqueInput.schema';

export const ReviewUpdateOneSchema: z.ZodType<Prisma.ReviewUpdateArgs> = z.object({ select: ReviewSelectObjectSchema.optional(), include: ReviewIncludeObjectSchema.optional(), data: z.union([ReviewUpdateInputObjectSchema, ReviewUncheckedUpdateInputObjectSchema]), where: ReviewWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ReviewUpdateArgs>;

export const ReviewUpdateOneZodSchema = z.object({ select: ReviewSelectObjectSchema.optional(), include: ReviewIncludeObjectSchema.optional(), data: z.union([ReviewUpdateInputObjectSchema, ReviewUncheckedUpdateInputObjectSchema]), where: ReviewWhereUniqueInputObjectSchema }).strict();