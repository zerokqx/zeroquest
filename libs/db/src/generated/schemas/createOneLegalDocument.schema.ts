import type { Prisma } from '../client';
import * as z from 'zod';
import { LegalDocumentSelectObjectSchema as LegalDocumentSelectObjectSchema } from './objects/LegalDocumentSelect.schema';
import { LegalDocumentIncludeObjectSchema as LegalDocumentIncludeObjectSchema } from './objects/LegalDocumentInclude.schema';
import { LegalDocumentCreateInputObjectSchema as LegalDocumentCreateInputObjectSchema } from './objects/LegalDocumentCreateInput.schema';
import { LegalDocumentUncheckedCreateInputObjectSchema as LegalDocumentUncheckedCreateInputObjectSchema } from './objects/LegalDocumentUncheckedCreateInput.schema';

export const LegalDocumentCreateOneSchema: z.ZodType<Prisma.LegalDocumentCreateArgs> = z.object({ select: LegalDocumentSelectObjectSchema.optional(), include: LegalDocumentIncludeObjectSchema.optional(), data: z.union([LegalDocumentCreateInputObjectSchema, LegalDocumentUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.LegalDocumentCreateArgs>;

export const LegalDocumentCreateOneZodSchema = z.object({ select: LegalDocumentSelectObjectSchema.optional(), include: LegalDocumentIncludeObjectSchema.optional(), data: z.union([LegalDocumentCreateInputObjectSchema, LegalDocumentUncheckedCreateInputObjectSchema]) }).strict();