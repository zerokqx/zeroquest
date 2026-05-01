import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SessionUpdateManyWithoutClientTypeNestedInputObjectSchema as SessionUpdateManyWithoutClientTypeNestedInputObjectSchema } from './SessionUpdateManyWithoutClientTypeNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutClientTypeNestedInputObjectSchema).optional()
}).strict();
export const ClientTypeUpdateInputObjectSchema: z.ZodType<Prisma.ClientTypeUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientTypeUpdateInput>;
export const ClientTypeUpdateInputObjectZodSchema = makeSchema();
