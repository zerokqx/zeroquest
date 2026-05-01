import * as z from 'zod';
import { Prisma } from '../../client';
import Decimal from 'decimal.js';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { PaymentUpdateManyWithoutPlanNestedInputObjectSchema as PaymentUpdateManyWithoutPlanNestedInputObjectSchema } from './PaymentUpdateManyWithoutPlanNestedInput.schema';
import { SubscribeUpdateManyWithoutPlanNestedInputObjectSchema as SubscribeUpdateManyWithoutPlanNestedInputObjectSchema } from './SubscribeUpdateManyWithoutPlanNestedInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const makeSchema = () => z.object({
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
  duratationDays: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  payments: z.lazy(() => PaymentUpdateManyWithoutPlanNestedInputObjectSchema).optional(),
  subscribes: z.lazy(() => SubscribeUpdateManyWithoutPlanNestedInputObjectSchema).optional()
}).strict();
export const PlanUpdateWithoutInboundInputObjectSchema: z.ZodType<Prisma.PlanUpdateWithoutInboundInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanUpdateWithoutInboundInput>;
export const PlanUpdateWithoutInboundInputObjectZodSchema = makeSchema();
