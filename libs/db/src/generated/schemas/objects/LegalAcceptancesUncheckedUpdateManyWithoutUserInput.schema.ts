import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  legalDocumentId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const LegalAcceptancesUncheckedUpdateManyWithoutUserInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesUncheckedUpdateManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesUncheckedUpdateManyWithoutUserInput>;
export const LegalAcceptancesUncheckedUpdateManyWithoutUserInputObjectZodSchema = makeSchema();
