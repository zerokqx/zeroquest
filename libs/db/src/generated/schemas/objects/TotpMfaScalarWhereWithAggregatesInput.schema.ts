import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const totpmfascalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TotpMfaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TotpMfaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TotpMfaScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TotpMfaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TotpMfaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  enabled: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  ciphertext: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  iv: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  authTag: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const TotpMfaScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TotpMfaScalarWhereWithAggregatesInput> = totpmfascalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TotpMfaScalarWhereWithAggregatesInput>;
export const TotpMfaScalarWhereWithAggregatesInputObjectZodSchema = totpmfascalarwherewithaggregatesinputSchema;
