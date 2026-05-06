import * as z from 'zod';
import { Prisma } from '../../client';
import Decimal from 'decimal.js';


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
  duratationDays: z.number().int().optional()
}).strict();
export const PlanCreateManyInboundInputObjectSchema: z.ZodType<Prisma.PlanCreateManyInboundInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanCreateManyInboundInput>;
export const PlanCreateManyInboundInputObjectZodSchema = makeSchema();
