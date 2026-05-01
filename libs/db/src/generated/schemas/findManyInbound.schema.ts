import type { Prisma } from '../client';
import * as z from 'zod';
import { InboundIncludeObjectSchema as InboundIncludeObjectSchema } from './objects/InboundInclude.schema';
import { InboundOrderByWithRelationInputObjectSchema as InboundOrderByWithRelationInputObjectSchema } from './objects/InboundOrderByWithRelationInput.schema';
import { InboundWhereInputObjectSchema as InboundWhereInputObjectSchema } from './objects/InboundWhereInput.schema';
import { InboundWhereUniqueInputObjectSchema as InboundWhereUniqueInputObjectSchema } from './objects/InboundWhereUniqueInput.schema';
import { InboundScalarFieldEnumSchema } from './enums/InboundScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const InboundFindManySelectSchema: z.ZodType<Prisma.InboundSelect> = z.object({
    id: z.boolean().optional(),
    enable: z.boolean().optional(),
    name: z.boolean().optional(),
    inboundId: z.boolean().optional(),
    plans: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.InboundSelect>;

export const InboundFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    enable: z.boolean().optional(),
    name: z.boolean().optional(),
    inboundId: z.boolean().optional(),
    plans: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const InboundFindManySchema: z.ZodType<Prisma.InboundFindManyArgs> = z.object({ select: InboundFindManySelectSchema.optional(), include: z.lazy(() => InboundIncludeObjectSchema.optional()), orderBy: z.union([InboundOrderByWithRelationInputObjectSchema, InboundOrderByWithRelationInputObjectSchema.array()]).optional(), where: InboundWhereInputObjectSchema.optional(), cursor: InboundWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([InboundScalarFieldEnumSchema, InboundScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.InboundFindManyArgs>;

export const InboundFindManyZodSchema = z.object({ select: InboundFindManySelectSchema.optional(), include: z.lazy(() => InboundIncludeObjectSchema.optional()), orderBy: z.union([InboundOrderByWithRelationInputObjectSchema, InboundOrderByWithRelationInputObjectSchema.array()]).optional(), where: InboundWhereInputObjectSchema.optional(), cursor: InboundWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([InboundScalarFieldEnumSchema, InboundScalarFieldEnumSchema.array()]).optional() }).strict();