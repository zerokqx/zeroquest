import * as z from 'zod';
import { Prisma } from '../../client';
import Decimal from 'decimal.js';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const planscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PlanScalarWhereInputObjectSchema), z.lazy(() => PlanScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PlanScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PlanScalarWhereInputObjectSchema), z.lazy(() => PlanScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isSpecial: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  discountedPercent: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'discountedPercent' must be a Decimal",
})]).optional(),
  features: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  price: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  totalGb: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  inboundId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  duratationDays: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const PlanScalarWhereInputObjectSchema: z.ZodType<Prisma.PlanScalarWhereInput> = planscalarwhereinputSchema as unknown as z.ZodType<Prisma.PlanScalarWhereInput>;
export const PlanScalarWhereInputObjectZodSchema = planscalarwhereinputSchema;
