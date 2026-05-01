import type { Prisma } from '../client';
import * as z from 'zod';
import { RefundIncludeObjectSchema as RefundIncludeObjectSchema } from './objects/RefundInclude.schema';
import { RefundOrderByWithRelationInputObjectSchema as RefundOrderByWithRelationInputObjectSchema } from './objects/RefundOrderByWithRelationInput.schema';
import { RefundWhereInputObjectSchema as RefundWhereInputObjectSchema } from './objects/RefundWhereInput.schema';
import { RefundWhereUniqueInputObjectSchema as RefundWhereUniqueInputObjectSchema } from './objects/RefundWhereUniqueInput.schema';
import { RefundScalarFieldEnumSchema } from './enums/RefundScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RefundFindFirstSelectSchema: z.ZodType<Prisma.RefundSelect> = z.object({
    id: z.boolean().optional(),
    status: z.boolean().optional(),
    payment: z.boolean().optional(),
    paymentId: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.RefundSelect>;

export const RefundFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    status: z.boolean().optional(),
    payment: z.boolean().optional(),
    paymentId: z.boolean().optional()
  }).strict();

export const RefundFindFirstSchema: z.ZodType<Prisma.RefundFindFirstArgs> = z.object({ select: RefundFindFirstSelectSchema.optional(), include: z.lazy(() => RefundIncludeObjectSchema.optional()), orderBy: z.union([RefundOrderByWithRelationInputObjectSchema, RefundOrderByWithRelationInputObjectSchema.array()]).optional(), where: RefundWhereInputObjectSchema.optional(), cursor: RefundWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RefundScalarFieldEnumSchema, RefundScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.RefundFindFirstArgs>;

export const RefundFindFirstZodSchema = z.object({ select: RefundFindFirstSelectSchema.optional(), include: z.lazy(() => RefundIncludeObjectSchema.optional()), orderBy: z.union([RefundOrderByWithRelationInputObjectSchema, RefundOrderByWithRelationInputObjectSchema.array()]).optional(), where: RefundWhereInputObjectSchema.optional(), cursor: RefundWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RefundScalarFieldEnumSchema, RefundScalarFieldEnumSchema.array()]).optional() }).strict();