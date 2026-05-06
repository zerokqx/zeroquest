import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DecimalNullableListFilterObjectSchema as DecimalNullableListFilterObjectSchema } from './DecimalNullableListFilter.schema';
import { EnumIpStatusFilterObjectSchema as EnumIpStatusFilterObjectSchema } from './EnumIpStatusFilter.schema';
import { IpStatusSchema } from '../enums/IpStatus.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const ipwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => IpWhereInputObjectSchema), z.lazy(() => IpWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => IpWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => IpWhereInputObjectSchema), z.lazy(() => IpWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  ip: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  rangeLow: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  rangeHigh: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  country: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  region: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  eu: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  timezone: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  city: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  ll: z.lazy(() => DecimalNullableListFilterObjectSchema).optional(),
  metro: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  area: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  status: z.union([z.lazy(() => EnumIpStatusFilterObjectSchema), IpStatusSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const IpWhereInputObjectSchema: z.ZodType<Prisma.IpWhereInput> = ipwhereinputSchema as unknown as z.ZodType<Prisma.IpWhereInput>;
export const IpWhereInputObjectZodSchema = ipwhereinputSchema;
