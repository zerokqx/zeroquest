import type { Prisma } from '../client';
import * as z from 'zod';
import { TotpTokenIncludeObjectSchema as TotpTokenIncludeObjectSchema } from './objects/TotpTokenInclude.schema';
import { TotpTokenOrderByWithRelationInputObjectSchema as TotpTokenOrderByWithRelationInputObjectSchema } from './objects/TotpTokenOrderByWithRelationInput.schema';
import { TotpTokenWhereInputObjectSchema as TotpTokenWhereInputObjectSchema } from './objects/TotpTokenWhereInput.schema';
import { TotpTokenWhereUniqueInputObjectSchema as TotpTokenWhereUniqueInputObjectSchema } from './objects/TotpTokenWhereUniqueInput.schema';
import { TotpTokenScalarFieldEnumSchema } from './enums/TotpTokenScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TotpTokenFindFirstSelectSchema: z.ZodType<Prisma.TotpTokenSelect> = z.object({
    id: z.boolean().optional(),
    enabled: z.boolean().optional(),
    ciphertext: z.boolean().optional(),
    iv: z.boolean().optional(),
    authTag: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.boolean().optional(),
    userId: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TotpTokenSelect>;

export const TotpTokenFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    enabled: z.boolean().optional(),
    ciphertext: z.boolean().optional(),
    iv: z.boolean().optional(),
    authTag: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.boolean().optional(),
    userId: z.boolean().optional()
  }).strict();

export const TotpTokenFindFirstSchema: z.ZodType<Prisma.TotpTokenFindFirstArgs> = z.object({ select: TotpTokenFindFirstSelectSchema.optional(), include: z.lazy(() => TotpTokenIncludeObjectSchema.optional()), orderBy: z.union([TotpTokenOrderByWithRelationInputObjectSchema, TotpTokenOrderByWithRelationInputObjectSchema.array()]).optional(), where: TotpTokenWhereInputObjectSchema.optional(), cursor: TotpTokenWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TotpTokenScalarFieldEnumSchema, TotpTokenScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TotpTokenFindFirstArgs>;

export const TotpTokenFindFirstZodSchema = z.object({ select: TotpTokenFindFirstSelectSchema.optional(), include: z.lazy(() => TotpTokenIncludeObjectSchema.optional()), orderBy: z.union([TotpTokenOrderByWithRelationInputObjectSchema, TotpTokenOrderByWithRelationInputObjectSchema.array()]).optional(), where: TotpTokenWhereInputObjectSchema.optional(), cursor: TotpTokenWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TotpTokenScalarFieldEnumSchema, TotpTokenScalarFieldEnumSchema.array()]).optional() }).strict();