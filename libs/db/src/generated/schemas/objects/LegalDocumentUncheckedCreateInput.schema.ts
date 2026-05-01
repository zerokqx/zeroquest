import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalDocumentTypeSchema } from '../enums/LegalDocumentType.schema';
import { LegalAcceptancesUncheckedCreateNestedManyWithoutLegalDocumentInputObjectSchema as LegalAcceptancesUncheckedCreateNestedManyWithoutLegalDocumentInputObjectSchema } from './LegalAcceptancesUncheckedCreateNestedManyWithoutLegalDocumentInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  type: LegalDocumentTypeSchema,
  version: z.coerce.date().optional(),
  content: z.string(),
  legalAcceptances: z.lazy(() => LegalAcceptancesUncheckedCreateNestedManyWithoutLegalDocumentInputObjectSchema).optional()
}).strict();
export const LegalDocumentUncheckedCreateInputObjectSchema: z.ZodType<Prisma.LegalDocumentUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalDocumentUncheckedCreateInput>;
export const LegalDocumentUncheckedCreateInputObjectZodSchema = makeSchema();
