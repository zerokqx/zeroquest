import type { Prisma } from '../client';
import * as z from 'zod';
import { SubscribeIncludeObjectSchema as SubscribeIncludeObjectSchema } from './objects/SubscribeInclude.schema';
import { SubscribeOrderByWithRelationInputObjectSchema as SubscribeOrderByWithRelationInputObjectSchema } from './objects/SubscribeOrderByWithRelationInput.schema';
import { SubscribeWhereInputObjectSchema as SubscribeWhereInputObjectSchema } from './objects/SubscribeWhereInput.schema';
import { SubscribeWhereUniqueInputObjectSchema as SubscribeWhereUniqueInputObjectSchema } from './objects/SubscribeWhereUniqueInput.schema';
import { SubscribeScalarFieldEnumSchema } from './enums/SubscribeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SubscribeFindFirstSelectSchema: z.ZodType<Prisma.SubscribeSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    vlessLink: z.boolean().optional(),
    user: z.boolean().optional(),
    vlessClientId: z.boolean().optional(),
    userId: z.boolean().optional(),
    email: z.boolean().optional(),
    nextPaymentDate: z.boolean().optional(),
    status: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    plan: z.boolean().optional(),
    planId: z.boolean().optional(),
    totalGb: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SubscribeSelect>;

export const SubscribeFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    vlessLink: z.boolean().optional(),
    user: z.boolean().optional(),
    vlessClientId: z.boolean().optional(),
    userId: z.boolean().optional(),
    email: z.boolean().optional(),
    nextPaymentDate: z.boolean().optional(),
    status: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    plan: z.boolean().optional(),
    planId: z.boolean().optional(),
    totalGb: z.boolean().optional()
  }).strict();

export const SubscribeFindFirstSchema: z.ZodType<Prisma.SubscribeFindFirstArgs> = z.object({ select: SubscribeFindFirstSelectSchema.optional(), include: z.lazy(() => SubscribeIncludeObjectSchema.optional()), orderBy: z.union([SubscribeOrderByWithRelationInputObjectSchema, SubscribeOrderByWithRelationInputObjectSchema.array()]).optional(), where: SubscribeWhereInputObjectSchema.optional(), cursor: SubscribeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SubscribeScalarFieldEnumSchema, SubscribeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SubscribeFindFirstArgs>;

export const SubscribeFindFirstZodSchema = z.object({ select: SubscribeFindFirstSelectSchema.optional(), include: z.lazy(() => SubscribeIncludeObjectSchema.optional()), orderBy: z.union([SubscribeOrderByWithRelationInputObjectSchema, SubscribeOrderByWithRelationInputObjectSchema.array()]).optional(), where: SubscribeWhereInputObjectSchema.optional(), cursor: SubscribeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SubscribeScalarFieldEnumSchema, SubscribeScalarFieldEnumSchema.array()]).optional() }).strict();