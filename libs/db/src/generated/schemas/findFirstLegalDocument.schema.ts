import type { Prisma } from '../client';
import * as z from 'zod';
import { LegalDocumentIncludeObjectSchema as LegalDocumentIncludeObjectSchema } from './objects/LegalDocumentInclude.schema';
import { LegalDocumentOrderByWithRelationInputObjectSchema as LegalDocumentOrderByWithRelationInputObjectSchema } from './objects/LegalDocumentOrderByWithRelationInput.schema';
import { LegalDocumentWhereInputObjectSchema as LegalDocumentWhereInputObjectSchema } from './objects/LegalDocumentWhereInput.schema';
import { LegalDocumentWhereUniqueInputObjectSchema as LegalDocumentWhereUniqueInputObjectSchema } from './objects/LegalDocumentWhereUniqueInput.schema';
import { LegalDocumentScalarFieldEnumSchema } from './enums/LegalDocumentScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LegalDocumentFindFirstSelectSchema: z.ZodType<Prisma.LegalDocumentSelect> = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    version: z.boolean().optional(),
    content: z.boolean().optional(),
    legalAcceptances: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.LegalDocumentSelect>;

export const LegalDocumentFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    version: z.boolean().optional(),
    content: z.boolean().optional(),
    legalAcceptances: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const LegalDocumentFindFirstSchema: z.ZodType<Prisma.LegalDocumentFindFirstArgs> = z.object({ select: LegalDocumentFindFirstSelectSchema.optional(), include: z.lazy(() => LegalDocumentIncludeObjectSchema.optional()), orderBy: z.union([LegalDocumentOrderByWithRelationInputObjectSchema, LegalDocumentOrderByWithRelationInputObjectSchema.array()]).optional(), where: LegalDocumentWhereInputObjectSchema.optional(), cursor: LegalDocumentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LegalDocumentScalarFieldEnumSchema, LegalDocumentScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.LegalDocumentFindFirstArgs>;

export const LegalDocumentFindFirstZodSchema = z.object({ select: LegalDocumentFindFirstSelectSchema.optional(), include: z.lazy(() => LegalDocumentIncludeObjectSchema.optional()), orderBy: z.union([LegalDocumentOrderByWithRelationInputObjectSchema, LegalDocumentOrderByWithRelationInputObjectSchema.array()]).optional(), where: LegalDocumentWhereInputObjectSchema.optional(), cursor: LegalDocumentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LegalDocumentScalarFieldEnumSchema, LegalDocumentScalarFieldEnumSchema.array()]).optional() }).strict();