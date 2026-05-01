import type { Prisma } from '../client';
import * as z from 'zod';
import { ReviewOrderByWithRelationInputObjectSchema as ReviewOrderByWithRelationInputObjectSchema } from './objects/ReviewOrderByWithRelationInput.schema';
import { ReviewWhereInputObjectSchema as ReviewWhereInputObjectSchema } from './objects/ReviewWhereInput.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './objects/ReviewWhereUniqueInput.schema';
import { ReviewCountAggregateInputObjectSchema as ReviewCountAggregateInputObjectSchema } from './objects/ReviewCountAggregateInput.schema';

export const ReviewCountSchema: z.ZodType<Prisma.ReviewCountArgs> = z.object({ orderBy: z.union([ReviewOrderByWithRelationInputObjectSchema, ReviewOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReviewWhereInputObjectSchema.optional(), cursor: ReviewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReviewCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ReviewCountArgs>;

export const ReviewCountZodSchema = z.object({ orderBy: z.union([ReviewOrderByWithRelationInputObjectSchema, ReviewOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReviewWhereInputObjectSchema.optional(), cursor: ReviewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReviewCountAggregateInputObjectSchema ]).optional() }).strict();