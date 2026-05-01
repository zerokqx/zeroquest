import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserUpdateOneRequiredWithoutLegalAcceptancesNestedInputObjectSchema as UserUpdateOneRequiredWithoutLegalAcceptancesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutLegalAcceptancesNestedInput.schema';
import { LegalDocumentUpdateOneRequiredWithoutLegalAcceptancesNestedInputObjectSchema as LegalDocumentUpdateOneRequiredWithoutLegalAcceptancesNestedInputObjectSchema } from './LegalDocumentUpdateOneRequiredWithoutLegalAcceptancesNestedInput.schema'

const makeSchema = () => z.object({
  user: z.lazy(() => UserUpdateOneRequiredWithoutLegalAcceptancesNestedInputObjectSchema).optional(),
  legalDocument: z.lazy(() => LegalDocumentUpdateOneRequiredWithoutLegalAcceptancesNestedInputObjectSchema).optional()
}).strict();
export const LegalAcceptancesUpdateInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesUpdateInput>;
export const LegalAcceptancesUpdateInputObjectZodSchema = makeSchema();
