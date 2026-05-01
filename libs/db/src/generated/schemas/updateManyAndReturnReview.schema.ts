import type { Prisma } from '../client';
import * as z from 'zod';
import { ReviewSelectObjectSchema as ReviewSelectObjectSchema } from './objects/ReviewSelect.schema';
import { ReviewUpdateManyMutationInputObjectSchema as ReviewUpdateManyMutationInputObjectSchema } from './objects/ReviewUpdateManyMutationInput.schema';
import { ReviewWhereInputObjectSchema as ReviewWhereInputObjectSchema } from './objects/ReviewWhereInput.schema';

export const ReviewUpdateManyAndReturnSchema: z.ZodType<Prisma.ReviewUpdateManyAndReturnArgs> = z.object({ select: ReviewSelectObjectSchema.optional(), data: ReviewUpdateManyMutationInputObjectSchema, where: ReviewWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReviewUpdateManyAndReturnArgs>;

export const ReviewUpdateManyAndReturnZodSchema = z.object({ select: ReviewSelectObjectSchema.optional(), data: ReviewUpdateManyMutationInputObjectSchema, where: ReviewWhereInputObjectSchema.optional() }).strict();