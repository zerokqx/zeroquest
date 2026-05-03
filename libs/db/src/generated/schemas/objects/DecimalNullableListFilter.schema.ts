import * as z from 'zod';
import { Prisma } from '../../client';
import Decimal from 'decimal.js';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const makeSchema = () => z.object({
  equals: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'equals' must be a Decimal",
}).array().optional().nullable(),
  has: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'has' must be a Decimal",
}).optional().nullable(),
  hasEvery: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'hasEvery' must be a Decimal",
}).array().optional(),
  hasSome: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'hasSome' must be a Decimal",
}).array().optional(),
  isEmpty: z.boolean().optional()
}).strict();
export const DecimalNullableListFilterObjectSchema: z.ZodType<Prisma.DecimalNullableListFilter> = makeSchema() as unknown as z.ZodType<Prisma.DecimalNullableListFilter>;
export const DecimalNullableListFilterObjectZodSchema = makeSchema();
