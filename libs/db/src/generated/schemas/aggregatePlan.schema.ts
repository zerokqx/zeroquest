import type { Prisma } from '../client';
import * as z from 'zod';
import { PlanOrderByWithRelationInputObjectSchema as PlanOrderByWithRelationInputObjectSchema } from './objects/PlanOrderByWithRelationInput.schema';
import { PlanWhereInputObjectSchema as PlanWhereInputObjectSchema } from './objects/PlanWhereInput.schema';
import { PlanWhereUniqueInputObjectSchema as PlanWhereUniqueInputObjectSchema } from './objects/PlanWhereUniqueInput.schema';
import { PlanCountAggregateInputObjectSchema as PlanCountAggregateInputObjectSchema } from './objects/PlanCountAggregateInput.schema';
import { PlanMinAggregateInputObjectSchema as PlanMinAggregateInputObjectSchema } from './objects/PlanMinAggregateInput.schema';
import { PlanMaxAggregateInputObjectSchema as PlanMaxAggregateInputObjectSchema } from './objects/PlanMaxAggregateInput.schema';
import { PlanAvgAggregateInputObjectSchema as PlanAvgAggregateInputObjectSchema } from './objects/PlanAvgAggregateInput.schema';
import { PlanSumAggregateInputObjectSchema as PlanSumAggregateInputObjectSchema } from './objects/PlanSumAggregateInput.schema';

export const PlanAggregateSchema: z.ZodType<Prisma.PlanAggregateArgs> = z.object({ orderBy: z.union([PlanOrderByWithRelationInputObjectSchema, PlanOrderByWithRelationInputObjectSchema.array()]).optional(), where: PlanWhereInputObjectSchema.optional(), cursor: PlanWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), PlanCountAggregateInputObjectSchema ]).optional(), _min: PlanMinAggregateInputObjectSchema.optional(), _max: PlanMaxAggregateInputObjectSchema.optional(), _avg: PlanAvgAggregateInputObjectSchema.optional(), _sum: PlanSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PlanAggregateArgs>;

export const PlanAggregateZodSchema = z.object({ orderBy: z.union([PlanOrderByWithRelationInputObjectSchema, PlanOrderByWithRelationInputObjectSchema.array()]).optional(), where: PlanWhereInputObjectSchema.optional(), cursor: PlanWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), PlanCountAggregateInputObjectSchema ]).optional(), _min: PlanMinAggregateInputObjectSchema.optional(), _max: PlanMaxAggregateInputObjectSchema.optional(), _avg: PlanAvgAggregateInputObjectSchema.optional(), _sum: PlanSumAggregateInputObjectSchema.optional() }).strict();