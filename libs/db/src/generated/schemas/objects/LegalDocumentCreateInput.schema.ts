import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalDocumentTypeSchema } from '../enums/LegalDocumentType.schema';
import { LegalAcceptancesCreateNestedManyWithoutLegalDocumentInputObjectSchema as LegalAcceptancesCreateNestedManyWithoutLegalDocumentInputObjectSchema } from './LegalAcceptancesCreateNestedManyWithoutLegalDocumentInput.schema'

const makeSchema = () => z.object({
  type: LegalDocumentTypeSchema,
  version: z.coerce.date().optional(),
  content: z.string(),
  legalAcceptances: z.lazy(() => LegalAcceptancesCreateNestedManyWithoutLegalDocumentInputObjectSchema).optional()
}).strict();
export const LegalDocumentCreateInputObjectSchema: z.ZodType<Prisma.LegalDocumentCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalDocumentCreateInput>;
export const LegalDocumentCreateInputObjectZodSchema = makeSchema();
