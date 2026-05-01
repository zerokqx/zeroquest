import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SessionUncheckedUpdateManyWithoutClientTypeNestedInputObjectSchema as SessionUncheckedUpdateManyWithoutClientTypeNestedInputObjectSchema } from './SessionUncheckedUpdateManyWithoutClientTypeNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutClientTypeNestedInputObjectSchema).optional()
}).strict();
export const ClientTypeUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.ClientTypeUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientTypeUncheckedUpdateInput>;
export const ClientTypeUncheckedUpdateInputObjectZodSchema = makeSchema();
