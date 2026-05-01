import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const LegalAcceptancesUncheckedUpdateManyWithoutLegalDocumentInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesUncheckedUpdateManyWithoutLegalDocumentInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesUncheckedUpdateManyWithoutLegalDocumentInput>;
export const LegalAcceptancesUncheckedUpdateManyWithoutLegalDocumentInputObjectZodSchema = makeSchema();
