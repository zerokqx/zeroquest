import type { Prisma } from '../client';
import * as z from 'zod';
import { TotpMfaIncludeObjectSchema as TotpMfaIncludeObjectSchema } from './objects/TotpMfaInclude.schema';
import { TotpMfaOrderByWithRelationInputObjectSchema as TotpMfaOrderByWithRelationInputObjectSchema } from './objects/TotpMfaOrderByWithRelationInput.schema';
import { TotpMfaWhereInputObjectSchema as TotpMfaWhereInputObjectSchema } from './objects/TotpMfaWhereInput.schema';
import { TotpMfaWhereUniqueInputObjectSchema as TotpMfaWhereUniqueInputObjectSchema } from './objects/TotpMfaWhereUniqueInput.schema';
import { TotpMfaScalarFieldEnumSchema } from './enums/TotpMfaScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TotpMfaFindManySelectSchema: z.ZodType<Prisma.TotpMfaSelect> = z.object({
    id: z.boolean().optional(),
    enabled: z.boolean().optional(),
    ciphertext: z.boolean().optional(),
    iv: z.boolean().optional(),
    authTag: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.boolean().optional(),
    userId: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TotpMfaSelect>;

export const TotpMfaFindManySelectZodSchema = z.object({
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

export const TotpMfaFindManySchema: z.ZodType<Prisma.TotpMfaFindManyArgs> = z.object({ select: TotpMfaFindManySelectSchema.optional(), include: z.lazy(() => TotpMfaIncludeObjectSchema.optional()), orderBy: z.union([TotpMfaOrderByWithRelationInputObjectSchema, TotpMfaOrderByWithRelationInputObjectSchema.array()]).optional(), where: TotpMfaWhereInputObjectSchema.optional(), cursor: TotpMfaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TotpMfaScalarFieldEnumSchema, TotpMfaScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TotpMfaFindManyArgs>;

export const TotpMfaFindManyZodSchema = z.object({ select: TotpMfaFindManySelectSchema.optional(), include: z.lazy(() => TotpMfaIncludeObjectSchema.optional()), orderBy: z.union([TotpMfaOrderByWithRelationInputObjectSchema, TotpMfaOrderByWithRelationInputObjectSchema.array()]).optional(), where: TotpMfaWhereInputObjectSchema.optional(), cursor: TotpMfaWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TotpMfaScalarFieldEnumSchema, TotpMfaScalarFieldEnumSchema.array()]).optional() }).strict();