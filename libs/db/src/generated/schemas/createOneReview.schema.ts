import type { Prisma } from '../client';
import * as z from 'zod';
import { ReviewSelectObjectSchema as ReviewSelectObjectSchema } from './objects/ReviewSelect.schema';
import { ReviewIncludeObjectSchema as ReviewIncludeObjectSchema } from './objects/ReviewInclude.schema';
import { ReviewCreateInputObjectSchema as ReviewCreateInputObjectSchema } from './objects/ReviewCreateInput.schema';
import { ReviewUncheckedCreateInputObjectSchema as ReviewUncheckedCreateInputObjectSchema } from './objects/ReviewUncheckedCreateInput.schema';

export const ReviewCreateOneSchema: z.ZodType<Prisma.ReviewCreateArgs> = z.object({ select: ReviewSelectObjectSchema.optional(), include: ReviewIncludeObjectSchema.optional(), data: z.union([ReviewCreateInputObjectSchema, ReviewUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ReviewCreateArgs>;

export const ReviewCreateOneZodSchema = z.object({ select: ReviewSelectObjectSchema.optional(), include: ReviewIncludeObjectSchema.optional(), data: z.union([ReviewCreateInputObjectSchema, ReviewUncheckedCreateInputObjectSchema]) }).strict();