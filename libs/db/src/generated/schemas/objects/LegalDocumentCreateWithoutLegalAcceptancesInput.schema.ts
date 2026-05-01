import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalDocumentTypeSchema } from '../enums/LegalDocumentType.schema'

const makeSchema = () => z.object({
  type: LegalDocumentTypeSchema,
  version: z.coerce.date().optional(),
  content: z.string()
}).strict();
export const LegalDocumentCreateWithoutLegalAcceptancesInputObjectSchema: z.ZodType<Prisma.LegalDocumentCreateWithoutLegalAcceptancesInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalDocumentCreateWithoutLegalAcceptancesInput>;
export const LegalDocumentCreateWithoutLegalAcceptancesInputObjectZodSchema = makeSchema();
