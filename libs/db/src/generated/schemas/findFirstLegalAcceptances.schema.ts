import type { Prisma } from '../client';
import * as z from 'zod';
import { LegalAcceptancesIncludeObjectSchema as LegalAcceptancesIncludeObjectSchema } from './objects/LegalAcceptancesInclude.schema';
import { LegalAcceptancesOrderByWithRelationInputObjectSchema as LegalAcceptancesOrderByWithRelationInputObjectSchema } from './objects/LegalAcceptancesOrderByWithRelationInput.schema';
import { LegalAcceptancesWhereInputObjectSchema as LegalAcceptancesWhereInputObjectSchema } from './objects/LegalAcceptancesWhereInput.schema';
import { LegalAcceptancesWhereUniqueInputObjectSchema as LegalAcceptancesWhereUniqueInputObjectSchema } from './objects/LegalAcceptancesWhereUniqueInput.schema';
import { LegalAcceptancesScalarFieldEnumSchema } from './enums/LegalAcceptancesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LegalAcceptancesFindFirstSelectSchema: z.ZodType<Prisma.LegalAcceptancesSelect> = z.object({
    user: z.boolean().optional(),
    userId: z.boolean().optional(),
    legalDocumentId: z.boolean().optional(),
    legalDocument: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.LegalAcceptancesSelect>;

export const LegalAcceptancesFindFirstSelectZodSchema = z.object({
    user: z.boolean().optional(),
    userId: z.boolean().optional(),
    legalDocumentId: z.boolean().optional(),
    legalDocument: z.boolean().optional()
  }).strict();

export const LegalAcceptancesFindFirstSchema: z.ZodType<Prisma.LegalAcceptancesFindFirstArgs> = z.object({ select: LegalAcceptancesFindFirstSelectSchema.optional(), include: z.lazy(() => LegalAcceptancesIncludeObjectSchema.optional()), orderBy: z.union([LegalAcceptancesOrderByWithRelationInputObjectSchema, LegalAcceptancesOrderByWithRelationInputObjectSchema.array()]).optional(), where: LegalAcceptancesWhereInputObjectSchema.optional(), cursor: LegalAcceptancesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LegalAcceptancesScalarFieldEnumSchema, LegalAcceptancesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.LegalAcceptancesFindFirstArgs>;

export const LegalAcceptancesFindFirstZodSchema = z.object({ select: LegalAcceptancesFindFirstSelectSchema.optional(), include: z.lazy(() => LegalAcceptancesIncludeObjectSchema.optional()), orderBy: z.union([LegalAcceptancesOrderByWithRelationInputObjectSchema, LegalAcceptancesOrderByWithRelationInputObjectSchema.array()]).optional(), where: LegalAcceptancesWhereInputObjectSchema.optional(), cursor: LegalAcceptancesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LegalAcceptancesScalarFieldEnumSchema, LegalAcceptancesScalarFieldEnumSchema.array()]).optional() }).strict();