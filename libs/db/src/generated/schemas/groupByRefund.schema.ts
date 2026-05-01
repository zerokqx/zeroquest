import type { Prisma } from '../client';
import * as z from 'zod';
import { RefundWhereInputObjectSchema as RefundWhereInputObjectSchema } from './objects/RefundWhereInput.schema';
import { RefundOrderByWithAggregationInputObjectSchema as RefundOrderByWithAggregationInputObjectSchema } from './objects/RefundOrderByWithAggregationInput.schema';
import { RefundScalarWhereWithAggregatesInputObjectSchema as RefundScalarWhereWithAggregatesInputObjectSchema } from './objects/RefundScalarWhereWithAggregatesInput.schema';
import { RefundScalarFieldEnumSchema } from './enums/RefundScalarFieldEnum.schema';
import { RefundCountAggregateInputObjectSchema as RefundCountAggregateInputObjectSchema } from './objects/RefundCountAggregateInput.schema';
import { RefundMinAggregateInputObjectSchema as RefundMinAggregateInputObjectSchema } from './objects/RefundMinAggregateInput.schema';
import { RefundMaxAggregateInputObjectSchema as RefundMaxAggregateInputObjectSchema } from './objects/RefundMaxAggregateInput.schema';
import { RefundAvgAggregateInputObjectSchema as RefundAvgAggregateInputObjectSchema } from './objects/RefundAvgAggregateInput.schema';
import { RefundSumAggregateInputObjectSchema as RefundSumAggregateInputObjectSchema } from './objects/RefundSumAggregateInput.schema';

export const RefundGroupBySchema: z.ZodType<Prisma.RefundGroupByArgs> = z.object({ where: RefundWhereInputObjectSchema.optional(), orderBy: z.union([RefundOrderByWithAggregationInputObjectSchema, RefundOrderByWithAggregationInputObjectSchema.array()]).optional(), having: RefundScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(RefundScalarFieldEnumSchema), _count: z.union([ z.literal(true), RefundCountAggregateInputObjectSchema ]).optional(), _min: RefundMinAggregateInputObjectSchema.optional(), _max: RefundMaxAggregateInputObjectSchema.optional(), _avg: RefundAvgAggregateInputObjectSchema.optional(), _sum: RefundSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RefundGroupByArgs>;

export const RefundGroupByZodSchema = z.object({ where: RefundWhereInputObjectSchema.optional(), orderBy: z.union([RefundOrderByWithAggregationInputObjectSchema, RefundOrderByWithAggregationInputObjectSchema.array()]).optional(), having: RefundScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(RefundScalarFieldEnumSchema), _count: z.union([ z.literal(true), RefundCountAggregateInputObjectSchema ]).optional(), _min: RefundMinAggregateInputObjectSchema.optional(), _max: RefundMaxAggregateInputObjectSchema.optional(), _avg: RefundAvgAggregateInputObjectSchema.optional(), _sum: RefundSumAggregateInputObjectSchema.optional() }).strict();