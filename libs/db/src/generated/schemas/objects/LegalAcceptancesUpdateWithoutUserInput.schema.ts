import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalDocumentUpdateOneRequiredWithoutLegalAcceptancesNestedInputObjectSchema as LegalDocumentUpdateOneRequiredWithoutLegalAcceptancesNestedInputObjectSchema } from './LegalDocumentUpdateOneRequiredWithoutLegalAcceptancesNestedInput.schema'

const makeSchema = () => z.object({
  legalDocument: z.lazy(() => LegalDocumentUpdateOneRequiredWithoutLegalAcceptancesNestedInputObjectSchema).optional()
}).strict();
export const LegalAcceptancesUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesUpdateWithoutUserInput>;
export const LegalAcceptancesUpdateWithoutUserInputObjectZodSchema = makeSchema();
