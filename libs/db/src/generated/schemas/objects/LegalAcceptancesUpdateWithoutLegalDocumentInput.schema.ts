import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserUpdateOneRequiredWithoutLegalAcceptancesNestedInputObjectSchema as UserUpdateOneRequiredWithoutLegalAcceptancesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutLegalAcceptancesNestedInput.schema'

const makeSchema = () => z.object({
  user: z.lazy(() => UserUpdateOneRequiredWithoutLegalAcceptancesNestedInputObjectSchema).optional()
}).strict();
export const LegalAcceptancesUpdateWithoutLegalDocumentInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesUpdateWithoutLegalDocumentInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesUpdateWithoutLegalDocumentInput>;
export const LegalAcceptancesUpdateWithoutLegalDocumentInputObjectZodSchema = makeSchema();
