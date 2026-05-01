import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SubscribeStatusSchema } from '../enums/SubscribeStatus.schema';
import { EnumSubscribeStatusFieldUpdateOperationsInputObjectSchema as EnumSubscribeStatusFieldUpdateOperationsInputObjectSchema } from './EnumSubscribeStatusFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutSubscribesNestedInputObjectSchema as UserUpdateOneRequiredWithoutSubscribesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutSubscribesNestedInput.schema';
import { PlanUpdateOneRequiredWithoutSubscribesNestedInputObjectSchema as PlanUpdateOneRequiredWithoutSubscribesNestedInputObjectSchema } from './PlanUpdateOneRequiredWithoutSubscribesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  vlessLink: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  vlessClientId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nextPaymentDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([SubscribeStatusSchema, z.lazy(() => EnumSubscribeStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  expiresAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  totalGb: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutSubscribesNestedInputObjectSchema).optional(),
  plan: z.lazy(() => PlanUpdateOneRequiredWithoutSubscribesNestedInputObjectSchema).optional()
}).strict();
export const SubscribeUpdateInputObjectSchema: z.ZodType<Prisma.SubscribeUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeUpdateInput>;
export const SubscribeUpdateInputObjectZodSchema = makeSchema();
