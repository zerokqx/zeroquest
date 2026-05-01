import * as z from 'zod';
import { Prisma } from '../../client';
import Decimal from 'decimal.js';
import { PaymentUncheckedCreateNestedManyWithoutPlanInputObjectSchema as PaymentUncheckedCreateNestedManyWithoutPlanInputObjectSchema } from './PaymentUncheckedCreateNestedManyWithoutPlanInput.schema';
import { SubscribeUncheckedCreateNestedManyWithoutPlanInputObjectSchema as SubscribeUncheckedCreateNestedManyWithoutPlanInputObjectSchema } from './SubscribeUncheckedCreateNestedManyWithoutPlanInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  isSpecial: z.boolean().optional(),
  discountedPercent: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'discountedPercent' must be a Decimal",
}).optional(),
  features: z.string().optional().nullable(),
  price: z.number().int(),
  description: z.string().optional().nullable(),
  totalGb: z.number().int().optional(),
  duratationDays: z.number().int(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutPlanInputObjectSchema).optional(),
  subscribes: z.lazy(() => SubscribeUncheckedCreateNestedManyWithoutPlanInputObjectSchema).optional()
}).strict();
export const PlanUncheckedCreateWithoutInboundInputObjectSchema: z.ZodType<Prisma.PlanUncheckedCreateWithoutInboundInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanUncheckedCreateWithoutInboundInput>;
export const PlanUncheckedCreateWithoutInboundInputObjectZodSchema = makeSchema();
