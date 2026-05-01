import type { Prisma } from '../client';
import * as z from 'zod';
import { ReviewSelectObjectSchema as ReviewSelectObjectSchema } from './objects/ReviewSelect.schema';
import { ReviewIncludeObjectSchema as ReviewIncludeObjectSchema } from './objects/ReviewInclude.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './objects/ReviewWhereUniqueInput.schema';
import { ReviewCreateInputObjectSchema as ReviewCreateInputObjectSchema } from './objects/ReviewCreateInput.schema';
import { ReviewUncheckedCreateInputObjectSchema as ReviewUncheckedCreateInputObjectSchema } from './objects/ReviewUncheckedCreateInput.schema';
import { ReviewUpdateInputObjectSchema as ReviewUpdateInputObjectSchema } from './objects/ReviewUpdateInput.schema';
import { ReviewUncheckedUpdateInputObjectSchema as ReviewUncheckedUpdateInputObjectSchema } from './objects/ReviewUncheckedUpdateInput.schema';

export const ReviewUpsertOneSchema: z.ZodType<Prisma.ReviewUpsertArgs> = z.object({ select: ReviewSelectObjectSchema.optional(), include: ReviewIncludeObjectSchema.optional(), where: ReviewWhereUniqueInputObjectSchema, create: z.union([ ReviewCreateInputObjectSchema, ReviewUncheckedCreateInputObjectSchema ]), update: z.union([ ReviewUpdateInputObjectSchema, ReviewUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ReviewUpsertArgs>;

export const ReviewUpsertOneZodSchema = z.object({ select: ReviewSelectObjectSchema.optional(), include: ReviewIncludeObjectSchema.optional(), where: ReviewWhereUniqueInputObjectSchema, create: z.union([ ReviewCreateInputObjectSchema, ReviewUncheckedCreateInputObjectSchema ]), update: z.union([ ReviewUpdateInputObjectSchema, ReviewUncheckedUpdateInputObjectSchema ]) }).strict();