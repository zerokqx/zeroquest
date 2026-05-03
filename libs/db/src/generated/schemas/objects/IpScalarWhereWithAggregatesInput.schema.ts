import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DecimalNullableListFilterObjectSchema as DecimalNullableListFilterObjectSchema } from './DecimalNullableListFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const ipscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => IpScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => IpScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => IpScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => IpScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => IpScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  ip: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  rangeLow: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  rangeHigh: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  country: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  region: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  eu: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  timezone: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  city: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  ll: z.lazy(() => DecimalNullableListFilterObjectSchema).optional(),
  metro: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  area: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const IpScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.IpScalarWhereWithAggregatesInput> = ipscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.IpScalarWhereWithAggregatesInput>;
export const IpScalarWhereWithAggregatesInputObjectZodSchema = ipscalarwherewithaggregatesinputSchema;
