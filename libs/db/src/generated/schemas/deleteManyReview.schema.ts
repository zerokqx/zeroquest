import type { Prisma } from '../client';
import * as z from 'zod';
import { ReviewWhereInputObjectSchema as ReviewWhereInputObjectSchema } from './objects/ReviewWhereInput.schema';

export const ReviewDeleteManySchema: z.ZodType<Prisma.ReviewDeleteManyArgs> = z.object({ where: ReviewWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReviewDeleteManyArgs>;

export const ReviewDeleteManyZodSchema = z.object({ where: ReviewWhereInputObjectSchema.optional() }).strict();