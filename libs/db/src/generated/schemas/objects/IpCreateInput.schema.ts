import * as z from 'zod';
import { Prisma } from '../../client';
import Decimal from 'decimal.js';
import { IpCreatellInputObjectSchema as IpCreatellInputObjectSchema } from './IpCreatellInput.schema';
import { SessionCreateNestedManyWithoutIpInputObjectSchema as SessionCreateNestedManyWithoutIpInputObjectSchema } from './SessionCreateNestedManyWithoutIpInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const makeSchema = () => z.object({
  ip: z.string(),
  rangeLow: z.number().int(),
  rangeHigh: z.number().int(),
  country: z.string(),
  region: z.string(),
  eu: z.boolean(),
  timezone: z.string(),
  city: z.string(),
  ll: z.union([z.lazy(() => IpCreatellInputObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'll' must be a Decimal",
}).array()]).optional(),
  metro: z.number().int(),
  area: z.number().int(),
  createdAt: z.coerce.date().optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutIpInputObjectSchema).optional()
}).strict();
export const IpCreateInputObjectSchema: z.ZodType<Prisma.IpCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.IpCreateInput>;
export const IpCreateInputObjectZodSchema = makeSchema();
