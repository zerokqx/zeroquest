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
}).array()
}).strict();
export const IpCreatellInputObjectSchema: z.ZodType<Prisma.IpCreatellInput> = makeSchema() as unknown as z.ZodType<Prisma.IpCreatellInput>;
export const IpCreatellInputObjectZodSchema = makeSchema();
