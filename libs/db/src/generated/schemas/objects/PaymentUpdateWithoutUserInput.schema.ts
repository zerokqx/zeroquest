import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { EnumPaymentStatusFieldUpdateOperationsInputObjectSchema as EnumPaymentStatusFieldUpdateOperationsInputObjectSchema } from './EnumPaymentStatusFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { RefundUpdateOneWithoutPaymentNestedInputObjectSchema as RefundUpdateOneWithoutPaymentNestedInputObjectSchema } from './RefundUpdateOneWithoutPaymentNestedInput.schema';
import { PlanUpdateOneWithoutPaymentsNestedInputObjectSchema as PlanUpdateOneWithoutPaymentsNestedInputObjectSchema } from './PlanUpdateOneWithoutPaymentsNestedInput.schema'

const makeSchema = () => z.object({
  providerPaymentId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([PaymentStatusSchema, z.lazy(() => EnumPaymentStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  currency: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  value: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  idempotenceKey: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  confirmationUrl: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  refund: z.lazy(() => RefundUpdateOneWithoutPaymentNestedInputObjectSchema).optional(),
  plan: z.lazy(() => PlanUpdateOneWithoutPaymentsNestedInputObjectSchema).optional()
}).strict();
export const PaymentUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.PaymentUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUpdateWithoutUserInput>;
export const PaymentUpdateWithoutUserInputObjectZodSchema = makeSchema();
