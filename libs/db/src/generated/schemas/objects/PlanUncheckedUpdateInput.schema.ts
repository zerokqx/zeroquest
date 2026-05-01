import * as z from 'zod';
import { Prisma } from '../../client';
import Decimal from 'decimal.js';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { PaymentUncheckedUpdateManyWithoutPlanNestedInputObjectSchema as PaymentUncheckedUpdateManyWithoutPlanNestedInputObjectSchema } from './PaymentUncheckedUpdateManyWithoutPlanNestedInput.schema';
import { SubscribeUncheckedUpdateManyWithoutPlanNestedInputObjectSchema as SubscribeUncheckedUpdateManyWithoutPlanNestedInputObjectSchema } from './SubscribeUncheckedUpdateManyWithoutPlanNestedInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isSpecial: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  discountedPercent: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'discountedPercent' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  features: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  price: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  totalGb: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  inboundId: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  duratationDays: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  payments: z.lazy(() => PaymentUncheckedUpdateManyWithoutPlanNestedInputObjectSchema).optional(),
  subscribes: z.lazy(() => SubscribeUncheckedUpdateManyWithoutPlanNestedInputObjectSchema).optional()
}).strict();
export const PlanUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.PlanUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanUncheckedUpdateInput>;
export const PlanUncheckedUpdateInputObjectZodSchema = makeSchema();
