import type { Prisma } from '../client';
import * as z from 'zod';
import { LegalDocumentSelectObjectSchema as LegalDocumentSelectObjectSchema } from './objects/LegalDocumentSelect.schema';
import { LegalDocumentIncludeObjectSchema as LegalDocumentIncludeObjectSchema } from './objects/LegalDocumentInclude.schema';
import { LegalDocumentWhereUniqueInputObjectSchema as LegalDocumentWhereUniqueInputObjectSchema } from './objects/LegalDocumentWhereUniqueInput.schema';

export const LegalDocumentFindUniqueSchema: z.ZodType<Prisma.LegalDocumentFindUniqueArgs> = z.object({ select: LegalDocumentSelectObjectSchema.optional(), include: LegalDocumentIncludeObjectSchema.optional(), where: LegalDocumentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LegalDocumentFindUniqueArgs>;

export const LegalDocumentFindUniqueZodSchema = z.object({ select: LegalDocumentSelectObjectSchema.optional(), include: LegalDocumentIncludeObjectSchema.optional(), where: LegalDocumentWhereUniqueInputObjectSchema }).strict();