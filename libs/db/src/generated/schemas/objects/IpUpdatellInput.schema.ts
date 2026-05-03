import * as z from 'zod';
import { Prisma } from '../../client';
import Decimal from 'decimal.js';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const makeSchema = () => z.object({
  set: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'set' must be a Decimal",
}).array().optional(),
  push: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'push' must be a Decimal",
}), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'push' must be a Decimal",
}).array()]).optional()
}).strict();
export const IpUpdatellInputObjectSchema: z.ZodType<Prisma.IpUpdatellInput> = makeSchema() as unknown as z.ZodType<Prisma.IpUpdatellInput>;
export const IpUpdatellInputObjectZodSchema = makeSchema();
