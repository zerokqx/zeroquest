import * as z from 'zod';
import { Prisma } from '../../client';
import Decimal from 'decimal.js';
import { IpCreatellInputObjectSchema as IpCreatellInputObjectSchema } from './IpCreatellInput.schema';
import { IpStatusSchema } from '../enums/IpStatus.schema';
import { SessionUncheckedCreateNestedManyWithoutIpInputObjectSchema as SessionUncheckedCreateNestedManyWithoutIpInputObjectSchema } from './SessionUncheckedCreateNestedManyWithoutIpInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.number().int().optional(),
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
  status: IpStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutIpInputObjectSchema).optional()
}).strict();
export const IpUncheckedCreateInputObjectSchema: z.ZodType<Prisma.IpUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.IpUncheckedCreateInput>;
export const IpUncheckedCreateInputObjectZodSchema = makeSchema();
