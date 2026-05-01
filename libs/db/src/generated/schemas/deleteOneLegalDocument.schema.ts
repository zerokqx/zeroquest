import type { Prisma } from '../client';
import * as z from 'zod';
import { LegalDocumentSelectObjectSchema as LegalDocumentSelectObjectSchema } from './objects/LegalDocumentSelect.schema';
import { LegalDocumentIncludeObjectSchema as LegalDocumentIncludeObjectSchema } from './objects/LegalDocumentInclude.schema';
import { LegalDocumentWhereUniqueInputObjectSchema as LegalDocumentWhereUniqueInputObjectSchema } from './objects/LegalDocumentWhereUniqueInput.schema';

export const LegalDocumentDeleteOneSchema: z.ZodType<Prisma.LegalDocumentDeleteArgs> = z.object({ select: LegalDocumentSelectObjectSchema.optional(), include: LegalDocumentIncludeObjectSchema.optional(), where: LegalDocumentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LegalDocumentDeleteArgs>;

export const LegalDocumentDeleteOneZodSchema = z.object({ select: LegalDocumentSelectObjectSchema.optional(), include: LegalDocumentIncludeObjectSchema.optional(), where: LegalDocumentWhereUniqueInputObjectSchema }).strict();