import type { Prisma } from '../client';
import * as z from 'zod';
import { ReviewOrderByWithRelationInputObjectSchema as ReviewOrderByWithRelationInputObjectSchema } from './objects/ReviewOrderByWithRelationInput.schema';
import { ReviewWhereInputObjectSchema as ReviewWhereInputObjectSchema } from './objects/ReviewWhereInput.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './objects/ReviewWhereUniqueInput.schema';
import { ReviewCountAggregateInputObjectSchema as ReviewCountAggregateInputObjectSchema } from './objects/ReviewCountAggregateInput.schema';
import { ReviewMinAggregateInputObjectSchema as ReviewMinAggregateInputObjectSchema } from './objects/ReviewMinAggregateInput.schema';
import { ReviewMaxAggregateInputObjectSchema as ReviewMaxAggregateInputObjectSchema } from './objects/ReviewMaxAggregateInput.schema';
import { ReviewAvgAggregateInputObjectSchema as ReviewAvgAggregateInputObjectSchema } from './objects/ReviewAvgAggregateInput.schema';
import { ReviewSumAggregateInputObjectSchema as ReviewSumAggregateInputObjectSchema } from './objects/ReviewSumAggregateInput.schema';

export const ReviewAggregateSchema: z.ZodType<Prisma.ReviewAggregateArgs> = z.object({ orderBy: z.union([ReviewOrderByWithRelationInputObjectSchema, ReviewOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReviewWhereInputObjectSchema.optional(), cursor: ReviewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ReviewCountAggregateInputObjectSchema ]).optional(), _min: ReviewMinAggregateInputObjectSchema.optional(), _max: ReviewMaxAggregateInputObjectSchema.optional(), _avg: ReviewAvgAggregateInputObjectSchema.optional(), _sum: ReviewSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReviewAggregateArgs>;

export const ReviewAggregateZodSchema = z.object({ orderBy: z.union([ReviewOrderByWithRelationInputObjectSchema, ReviewOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReviewWhereInputObjectSchema.optional(), cursor: ReviewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ReviewCountAggregateInputObjectSchema ]).optional(), _min: ReviewMinAggregateInputObjectSchema.optional(), _max: ReviewMaxAggregateInputObjectSchema.optional(), _avg: ReviewAvgAggregateInputObjectSchema.optional(), _sum: ReviewSumAggregateInputObjectSchema.optional() }).strict();