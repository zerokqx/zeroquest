import type { Prisma } from '../client';
import * as z from 'zod';
import { LegalDocumentSelectObjectSchema as LegalDocumentSelectObjectSchema } from './objects/LegalDocumentSelect.schema';
import { LegalDocumentIncludeObjectSchema as LegalDocumentIncludeObjectSchema } from './objects/LegalDocumentInclude.schema';
import { LegalDocumentUpdateInputObjectSchema as LegalDocumentUpdateInputObjectSchema } from './objects/LegalDocumentUpdateInput.schema';
import { LegalDocumentUncheckedUpdateInputObjectSchema as LegalDocumentUncheckedUpdateInputObjectSchema } from './objects/LegalDocumentUncheckedUpdateInput.schema';
import { LegalDocumentWhereUniqueInputObjectSchema as LegalDocumentWhereUniqueInputObjectSchema } from './objects/LegalDocumentWhereUniqueInput.schema';

export const LegalDocumentUpdateOneSchema: z.ZodType<Prisma.LegalDocumentUpdateArgs> = z.object({ select: LegalDocumentSelectObjectSchema.optional(), include: LegalDocumentIncludeObjectSchema.optional(), data: z.union([LegalDocumentUpdateInputObjectSchema, LegalDocumentUncheckedUpdateInputObjectSchema]), where: LegalDocumentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LegalDocumentUpdateArgs>;

export const LegalDocumentUpdateOneZodSchema = z.object({ select: LegalDocumentSelectObjectSchema.optional(), include: LegalDocumentIncludeObjectSchema.optional(), data: z.union([LegalDocumentUpdateInputObjectSchema, LegalDocumentUncheckedUpdateInputObjectSchema]), where: LegalDocumentWhereUniqueInputObjectSchema }).strict();