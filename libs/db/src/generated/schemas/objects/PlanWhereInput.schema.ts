import * as z from 'zod';
import { Prisma } from '../../client';
import Decimal from 'decimal.js';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { PaymentListRelationFilterObjectSchema as PaymentListRelationFilterObjectSchema } from './PaymentListRelationFilter.schema';
import { SubscribeListRelationFilterObjectSchema as SubscribeListRelationFilterObjectSchema } from './SubscribeListRelationFilter.schema';
import { InboundScalarRelationFilterObjectSchema as InboundScalarRelationFilterObjectSchema } from './InboundScalarRelationFilter.schema';
import { InboundWhereInputObjectSchema as InboundWhereInputObjectSchema } from './InboundWhereInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const planwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PlanWhereInputObjectSchema), z.lazy(() => PlanWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PlanWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PlanWhereInputObjectSchema), z.lazy(() => PlanWhereInputObjectSchema).array()]).optional(),
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
  features: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  price: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  totalGb: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  inboundId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  duratationDays: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  payments: z.lazy(() => PaymentListRelationFilterObjectSchema).optional(),
  subscribes: z.lazy(() => SubscribeListRelationFilterObjectSchema).optional(),
  inbound: z.union([z.lazy(() => InboundScalarRelationFilterObjectSchema), z.lazy(() => InboundWhereInputObjectSchema)]).optional()
}).strict();
export const PlanWhereInputObjectSchema: z.ZodType<Prisma.PlanWhereInput> = planwhereinputSchema as unknown as z.ZodType<Prisma.PlanWhereInput>;
export const PlanWhereInputObjectZodSchema = planwhereinputSchema;
