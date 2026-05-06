import * as z from 'zod';
import { Prisma } from '../../client';
import Decimal from 'decimal.js';
import { PaymentUncheckedCreateNestedManyWithoutPlanInputObjectSchema as PaymentUncheckedCreateNestedManyWithoutPlanInputObjectSchema } from './PaymentUncheckedCreateNestedManyWithoutPlanInput.schema'

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
  features: z.string().optional(),
  price: z.number().int(),
  description: z.string().optional(),
  totalGb: z.number().int().optional(),
  inboundId: z.number().int(),
  duratationDays: z.number().int().optional(),
  payments: z.lazy(() => PaymentUncheckedCreateNestedManyWithoutPlanInputObjectSchema).optional()
}).strict();
export const PlanUncheckedCreateWithoutSubscribesInputObjectSchema: z.ZodType<Prisma.PlanUncheckedCreateWithoutSubscribesInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanUncheckedCreateWithoutSubscribesInput>;
export const PlanUncheckedCreateWithoutSubscribesInputObjectZodSchema = makeSchema();
