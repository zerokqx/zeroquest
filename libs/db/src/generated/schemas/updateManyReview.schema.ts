import type { Prisma } from '../client';
import * as z from 'zod';
import { ReviewUpdateManyMutationInputObjectSchema as ReviewUpdateManyMutationInputObjectSchema } from './objects/ReviewUpdateManyMutationInput.schema';
import { ReviewWhereInputObjectSchema as ReviewWhereInputObjectSchema } from './objects/ReviewWhereInput.schema';

export const ReviewUpdateManySchema: z.ZodType<Prisma.ReviewUpdateManyArgs> = z.object({ data: ReviewUpdateManyMutationInputObjectSchema, where: ReviewWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReviewUpdateManyArgs>;

export const ReviewUpdateManyZodSchema = z.object({ data: ReviewUpdateManyMutationInputObjectSchema, where: ReviewWhereInputObjectSchema.optional() }).strict();