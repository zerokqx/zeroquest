import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalDocumentTypeSchema } from '../enums/LegalDocumentType.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  type: LegalDocumentTypeSchema,
  version: z.coerce.date().optional(),
  content: z.string()
}).strict();
export const LegalDocumentUncheckedCreateWithoutLegalAcceptancesInputObjectSchema: z.ZodType<Prisma.LegalDocumentUncheckedCreateWithoutLegalAcceptancesInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalDocumentUncheckedCreateWithoutLegalAcceptancesInput>;
export const LegalDocumentUncheckedCreateWithoutLegalAcceptancesInputObjectZodSchema = makeSchema();
