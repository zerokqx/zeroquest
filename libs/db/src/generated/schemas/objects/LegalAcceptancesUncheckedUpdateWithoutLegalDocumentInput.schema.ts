import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const LegalAcceptancesUncheckedUpdateWithoutLegalDocumentInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesUncheckedUpdateWithoutLegalDocumentInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesUncheckedUpdateWithoutLegalDocumentInput>;
export const LegalAcceptancesUncheckedUpdateWithoutLegalDocumentInputObjectZodSchema = makeSchema();
