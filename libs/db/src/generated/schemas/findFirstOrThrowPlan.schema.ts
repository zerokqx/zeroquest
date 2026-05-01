import type { Prisma } from '../client';
import * as z from 'zod';
import { PlanIncludeObjectSchema as PlanIncludeObjectSchema } from './objects/PlanInclude.schema';
import { PlanOrderByWithRelationInputObjectSchema as PlanOrderByWithRelationInputObjectSchema } from './objects/PlanOrderByWithRelationInput.schema';
import { PlanWhereInputObjectSchema as PlanWhereInputObjectSchema } from './objects/PlanWhereInput.schema';
import { PlanWhereUniqueInputObjectSchema as PlanWhereUniqueInputObjectSchema } from './objects/PlanWhereUniqueInput.schema';
import { PlanScalarFieldEnumSchema } from './enums/PlanScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PlanFindFirstOrThrowSelectSchema: z.ZodType<Prisma.PlanSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    isSpecial: z.boolean().optional(),
    discountedPercent: z.boolean().optional(),
    features: z.boolean().optional(),
    price: z.boolean().optional(),
    description: z.boolean().optional(),
    totalGb: z.boolean().optional(),
    payments: z.boolean().optional(),
    subscribes: z.boolean().optional(),
    inbound: z.boolean().optional(),
    inboundId: z.boolean().optional(),
    duratationDays: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PlanSelect>;

export const PlanFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    isSpecial: z.boolean().optional(),
    discountedPercent: z.boolean().optional(),
    features: z.boolean().optional(),
    price: z.boolean().optional(),
    description: z.boolean().optional(),
    totalGb: z.boolean().optional(),
    payments: z.boolean().optional(),
    subscribes: z.boolean().optional(),
    inbound: z.boolean().optional(),
    inboundId: z.boolean().optional(),
    duratationDays: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const PlanFindFirstOrThrowSchema: z.ZodType<Prisma.PlanFindFirstOrThrowArgs> = z.object({ select: PlanFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => PlanIncludeObjectSchema.optional()), orderBy: z.union([PlanOrderByWithRelationInputObjectSchema, PlanOrderByWithRelationInputObjectSchema.array()]).optional(), where: PlanWhereInputObjectSchema.optional(), cursor: PlanWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PlanScalarFieldEnumSchema, PlanScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PlanFindFirstOrThrowArgs>;

export const PlanFindFirstOrThrowZodSchema = z.object({ select: PlanFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => PlanIncludeObjectSchema.optional()), orderBy: z.union([PlanOrderByWithRelationInputObjectSchema, PlanOrderByWithRelationInputObjectSchema.array()]).optional(), where: PlanWhereInputObjectSchema.optional(), cursor: PlanWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PlanScalarFieldEnumSchema, PlanScalarFieldEnumSchema.array()]).optional() }).strict();