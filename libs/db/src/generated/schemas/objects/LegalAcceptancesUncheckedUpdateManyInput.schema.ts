import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  legalDocumentId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const LegalAcceptancesUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesUncheckedUpdateManyInput>;
export const LegalAcceptancesUncheckedUpdateManyInputObjectZodSchema = makeSchema();
