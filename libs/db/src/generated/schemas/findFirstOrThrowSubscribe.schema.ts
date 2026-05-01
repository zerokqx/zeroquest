import type { Prisma } from '../client';
import * as z from 'zod';
import { SubscribeIncludeObjectSchema as SubscribeIncludeObjectSchema } from './objects/SubscribeInclude.schema';
import { SubscribeOrderByWithRelationInputObjectSchema as SubscribeOrderByWithRelationInputObjectSchema } from './objects/SubscribeOrderByWithRelationInput.schema';
import { SubscribeWhereInputObjectSchema as SubscribeWhereInputObjectSchema } from './objects/SubscribeWhereInput.schema';
import { SubscribeWhereUniqueInputObjectSchema as SubscribeWhereUniqueInputObjectSchema } from './objects/SubscribeWhereUniqueInput.schema';
import { SubscribeScalarFieldEnumSchema } from './enums/SubscribeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SubscribeFindFirstOrThrowSelectSchema: z.ZodType<Prisma.SubscribeSelect> = z.object({
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

export const SubscribeFindFirstOrThrowSelectZodSchema = z.object({
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

export const SubscribeFindFirstOrThrowSchema: z.ZodType<Prisma.SubscribeFindFirstOrThrowArgs> = z.object({ select: SubscribeFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => SubscribeIncludeObjectSchema.optional()), orderBy: z.union([SubscribeOrderByWithRelationInputObjectSchema, SubscribeOrderByWithRelationInputObjectSchema.array()]).optional(), where: SubscribeWhereInputObjectSchema.optional(), cursor: SubscribeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SubscribeScalarFieldEnumSchema, SubscribeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SubscribeFindFirstOrThrowArgs>;

export const SubscribeFindFirstOrThrowZodSchema = z.object({ select: SubscribeFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => SubscribeIncludeObjectSchema.optional()), orderBy: z.union([SubscribeOrderByWithRelationInputObjectSchema, SubscribeOrderByWithRelationInputObjectSchema.array()]).optional(), where: SubscribeWhereInputObjectSchema.optional(), cursor: SubscribeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SubscribeScalarFieldEnumSchema, SubscribeScalarFieldEnumSchema.array()]).optional() }).strict();