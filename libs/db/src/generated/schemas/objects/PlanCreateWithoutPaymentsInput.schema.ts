import * as z from 'zod';
import { Prisma } from '../../client';
import Decimal from 'decimal.js';
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
  subscribes: z.lazy(() => SubscribeCreateNestedManyWithoutPlanInputObjectSchema).optional(),
  inbound: z.lazy(() => InboundCreateNestedOneWithoutPlansInputObjectSchema)
}).strict();
export const PlanCreateWithoutPaymentsInputObjectSchema: z.ZodType<Prisma.PlanCreateWithoutPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanCreateWithoutPaymentsInput>;
export const PlanCreateWithoutPaymentsInputObjectZodSchema = makeSchema();
