import type { Prisma } from '../client';
import * as z from 'zod';
import { PlanOrderByWithRelationInputObjectSchema as PlanOrderByWithRelationInputObjectSchema } from './objects/PlanOrderByWithRelationInput.schema';
import { PlanWhereInputObjectSchema as PlanWhereInputObjectSchema } from './objects/PlanWhereInput.schema';
import { PlanWhereUniqueInputObjectSchema as PlanWhereUniqueInputObjectSchema } from './objects/PlanWhereUniqueInput.schema';
import { PlanCountAggregateInputObjectSchema as PlanCountAggregateInputObjectSchema } from './objects/PlanCountAggregateInput.schema';

export const PlanCountSchema: z.ZodType<Prisma.PlanCountArgs> = z.object({ orderBy: z.union([PlanOrderByWithRelationInputObjectSchema, PlanOrderByWithRelationInputObjectSchema.array()]).optional(), where: PlanWhereInputObjectSchema.optional(), cursor: PlanWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PlanCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.PlanCountArgs>;

export const PlanCountZodSchema = z.object({ orderBy: z.union([PlanOrderByWithRelationInputObjectSchema, PlanOrderByWithRelationInputObjectSchema.array()]).optional(), where: PlanWhereInputObjectSchema.optional(), cursor: PlanWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PlanCountAggregateInputObjectSchema ]).optional() }).strict();