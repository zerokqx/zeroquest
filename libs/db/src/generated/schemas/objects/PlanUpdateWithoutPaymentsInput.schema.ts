import * as z from 'zod';
import { Prisma } from '../../client';
import Decimal from 'decimal.js';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { SubscribeUpdateManyWithoutPlanNestedInputObjectSchema as SubscribeUpdateManyWithoutPlanNestedInputObjectSchema } from './SubscribeUpdateManyWithoutPlanNestedInput.schema';
import { InboundUpdateOneRequiredWithoutPlansNestedInputObjectSchema as InboundUpdateOneRequiredWithoutPlansNestedInputObjectSchema } from './InboundUpdateOneRequiredWithoutPlansNestedInput.schema'

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
  features: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  price: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  totalGb: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  duratationDays: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  subscribes: z.lazy(() => SubscribeUpdateManyWithoutPlanNestedInputObjectSchema).optional(),
  inbound: z.lazy(() => InboundUpdateOneRequiredWithoutPlansNestedInputObjectSchema).optional()
}).strict();
export const PlanUpdateWithoutPaymentsInputObjectSchema: z.ZodType<Prisma.PlanUpdateWithoutPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanUpdateWithoutPaymentsInput>;
export const PlanUpdateWithoutPaymentsInputObjectZodSchema = makeSchema();
