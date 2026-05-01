import type { Prisma } from '../client';
import * as z from 'zod';
import { InboundOrderByWithRelationInputObjectSchema as InboundOrderByWithRelationInputObjectSchema } from './objects/InboundOrderByWithRelationInput.schema';
import { InboundWhereInputObjectSchema as InboundWhereInputObjectSchema } from './objects/InboundWhereInput.schema';
import { InboundWhereUniqueInputObjectSchema as InboundWhereUniqueInputObjectSchema } from './objects/InboundWhereUniqueInput.schema';
import { InboundCountAggregateInputObjectSchema as InboundCountAggregateInputObjectSchema } from './objects/InboundCountAggregateInput.schema';
import { InboundMinAggregateInputObjectSchema as InboundMinAggregateInputObjectSchema } from './objects/InboundMinAggregateInput.schema';
import { InboundMaxAggregateInputObjectSchema as InboundMaxAggregateInputObjectSchema } from './objects/InboundMaxAggregateInput.schema';
import { InboundAvgAggregateInputObjectSchema as InboundAvgAggregateInputObjectSchema } from './objects/InboundAvgAggregateInput.schema';
import { InboundSumAggregateInputObjectSchema as InboundSumAggregateInputObjectSchema } from './objects/InboundSumAggregateInput.schema';

export const InboundAggregateSchema: z.ZodType<Prisma.InboundAggregateArgs> = z.object({ orderBy: z.union([InboundOrderByWithRelationInputObjectSchema, InboundOrderByWithRelationInputObjectSchema.array()]).optional(), where: InboundWhereInputObjectSchema.optional(), cursor: InboundWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), InboundCountAggregateInputObjectSchema ]).optional(), _min: InboundMinAggregateInputObjectSchema.optional(), _max: InboundMaxAggregateInputObjectSchema.optional(), _avg: InboundAvgAggregateInputObjectSchema.optional(), _sum: InboundSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.InboundAggregateArgs>;

export const InboundAggregateZodSchema = z.object({ orderBy: z.union([InboundOrderByWithRelationInputObjectSchema, InboundOrderByWithRelationInputObjectSchema.array()]).optional(), where: InboundWhereInputObjectSchema.optional(), cursor: InboundWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), InboundCountAggregateInputObjectSchema ]).optional(), _min: InboundMinAggregateInputObjectSchema.optional(), _max: InboundMaxAggregateInputObjectSchema.optional(), _avg: InboundAvgAggregateInputObjectSchema.optional(), _sum: InboundSumAggregateInputObjectSchema.optional() }).strict();