import type { Prisma } from '../client';
import * as z from 'zod';
import { RefundOrderByWithRelationInputObjectSchema as RefundOrderByWithRelationInputObjectSchema } from './objects/RefundOrderByWithRelationInput.schema';
import { RefundWhereInputObjectSchema as RefundWhereInputObjectSchema } from './objects/RefundWhereInput.schema';
import { RefundWhereUniqueInputObjectSchema as RefundWhereUniqueInputObjectSchema } from './objects/RefundWhereUniqueInput.schema';
import { RefundCountAggregateInputObjectSchema as RefundCountAggregateInputObjectSchema } from './objects/RefundCountAggregateInput.schema';
import { RefundMinAggregateInputObjectSchema as RefundMinAggregateInputObjectSchema } from './objects/RefundMinAggregateInput.schema';
import { RefundMaxAggregateInputObjectSchema as RefundMaxAggregateInputObjectSchema } from './objects/RefundMaxAggregateInput.schema';
import { RefundAvgAggregateInputObjectSchema as RefundAvgAggregateInputObjectSchema } from './objects/RefundAvgAggregateInput.schema';
import { RefundSumAggregateInputObjectSchema as RefundSumAggregateInputObjectSchema } from './objects/RefundSumAggregateInput.schema';

export const RefundAggregateSchema: z.ZodType<Prisma.RefundAggregateArgs> = z.object({ orderBy: z.union([RefundOrderByWithRelationInputObjectSchema, RefundOrderByWithRelationInputObjectSchema.array()]).optional(), where: RefundWhereInputObjectSchema.optional(), cursor: RefundWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), RefundCountAggregateInputObjectSchema ]).optional(), _min: RefundMinAggregateInputObjectSchema.optional(), _max: RefundMaxAggregateInputObjectSchema.optional(), _avg: RefundAvgAggregateInputObjectSchema.optional(), _sum: RefundSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RefundAggregateArgs>;

export const RefundAggregateZodSchema = z.object({ orderBy: z.union([RefundOrderByWithRelationInputObjectSchema, RefundOrderByWithRelationInputObjectSchema.array()]).optional(), where: RefundWhereInputObjectSchema.optional(), cursor: RefundWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), RefundCountAggregateInputObjectSchema ]).optional(), _min: RefundMinAggregateInputObjectSchema.optional(), _max: RefundMaxAggregateInputObjectSchema.optional(), _avg: RefundAvgAggregateInputObjectSchema.optional(), _sum: RefundSumAggregateInputObjectSchema.optional() }).strict();