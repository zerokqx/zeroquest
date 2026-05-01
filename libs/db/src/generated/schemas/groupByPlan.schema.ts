import type { Prisma } from '../client';
import * as z from 'zod';
import { PlanWhereInputObjectSchema as PlanWhereInputObjectSchema } from './objects/PlanWhereInput.schema';
import { PlanOrderByWithAggregationInputObjectSchema as PlanOrderByWithAggregationInputObjectSchema } from './objects/PlanOrderByWithAggregationInput.schema';
import { PlanScalarWhereWithAggregatesInputObjectSchema as PlanScalarWhereWithAggregatesInputObjectSchema } from './objects/PlanScalarWhereWithAggregatesInput.schema';
import { PlanScalarFieldEnumSchema } from './enums/PlanScalarFieldEnum.schema';
import { PlanCountAggregateInputObjectSchema as PlanCountAggregateInputObjectSchema } from './objects/PlanCountAggregateInput.schema';
import { PlanMinAggregateInputObjectSchema as PlanMinAggregateInputObjectSchema } from './objects/PlanMinAggregateInput.schema';
import { PlanMaxAggregateInputObjectSchema as PlanMaxAggregateInputObjectSchema } from './objects/PlanMaxAggregateInput.schema';
import { PlanAvgAggregateInputObjectSchema as PlanAvgAggregateInputObjectSchema } from './objects/PlanAvgAggregateInput.schema';
import { PlanSumAggregateInputObjectSchema as PlanSumAggregateInputObjectSchema } from './objects/PlanSumAggregateInput.schema';

export const PlanGroupBySchema: z.ZodType<Prisma.PlanGroupByArgs> = z.object({ where: PlanWhereInputObjectSchema.optional(), orderBy: z.union([PlanOrderByWithAggregationInputObjectSchema, PlanOrderByWithAggregationInputObjectSchema.array()]).optional(), having: PlanScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(PlanScalarFieldEnumSchema), _count: z.union([ z.literal(true), PlanCountAggregateInputObjectSchema ]).optional(), _min: PlanMinAggregateInputObjectSchema.optional(), _max: PlanMaxAggregateInputObjectSchema.optional(), _avg: PlanAvgAggregateInputObjectSchema.optional(), _sum: PlanSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PlanGroupByArgs>;

export const PlanGroupByZodSchema = z.object({ where: PlanWhereInputObjectSchema.optional(), orderBy: z.union([PlanOrderByWithAggregationInputObjectSchema, PlanOrderByWithAggregationInputObjectSchema.array()]).optional(), having: PlanScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(PlanScalarFieldEnumSchema), _count: z.union([ z.literal(true), PlanCountAggregateInputObjectSchema ]).optional(), _min: PlanMinAggregateInputObjectSchema.optional(), _max: PlanMaxAggregateInputObjectSchema.optional(), _avg: PlanAvgAggregateInputObjectSchema.optional(), _sum: PlanSumAggregateInputObjectSchema.optional() }).strict();