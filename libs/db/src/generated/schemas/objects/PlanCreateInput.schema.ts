import * as z from 'zod';
import { Prisma } from '../../client';
import Decimal from 'decimal.js';
import { PaymentCreateNestedManyWithoutPlanInputObjectSchema as PaymentCreateNestedManyWithoutPlanInputObjectSchema } from './PaymentCreateNestedManyWithoutPlanInput.schema';
import { SubscribeCreateNestedManyWithoutPlanInputObjectSchema as SubscribeCreateNestedManyWithoutPlanInputObjectSchema } from './SubscribeCreateNestedManyWithoutPlanInput.schema';
import { InboundCreateNestedOneWithoutPlansInputObjectSchema as InboundCreateNestedOneWithoutPlansInputObjectSchema } from './InboundCreateNestedOneWithoutPlansInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const makeSchema = () => z.object({
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
  payments: z.lazy(() => PaymentCreateNestedManyWithoutPlanInputObjectSchema).optional(),
  subscribes: z.lazy(() => SubscribeCreateNestedManyWithoutPlanInputObjectSchema).optional(),
  inbound: z.lazy(() => InboundCreateNestedOneWithoutPlansInputObjectSchema)
}).strict();
export const PlanCreateInputObjectSchema: z.ZodType<Prisma.PlanCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanCreateInput>;
export const PlanCreateInputObjectZodSchema = makeSchema();
