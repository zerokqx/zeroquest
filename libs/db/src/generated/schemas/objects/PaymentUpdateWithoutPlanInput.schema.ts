import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { EnumPaymentStatusFieldUpdateOperationsInputObjectSchema as EnumPaymentStatusFieldUpdateOperationsInputObjectSchema } from './EnumPaymentStatusFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutPaymentsNestedInputObjectSchema as UserUpdateOneRequiredWithoutPaymentsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutPaymentsNestedInput.schema';
import { RefundUpdateOneWithoutPaymentNestedInputObjectSchema as RefundUpdateOneWithoutPaymentNestedInputObjectSchema } from './RefundUpdateOneWithoutPaymentNestedInput.schema'

const makeSchema = () => z.object({
  providerPaymentId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([PaymentStatusSchema, z.lazy(() => EnumPaymentStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  currency: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  value: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  idempotenceKey: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  confirmationUrl: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutPaymentsNestedInputObjectSchema).optional(),
  refund: z.lazy(() => RefundUpdateOneWithoutPaymentNestedInputObjectSchema).optional()
}).strict();
export const PaymentUpdateWithoutPlanInputObjectSchema: z.ZodType<Prisma.PaymentUpdateWithoutPlanInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUpdateWithoutPlanInput>;
export const PaymentUpdateWithoutPlanInputObjectZodSchema = makeSchema();
