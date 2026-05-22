import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const totpmfawhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TotpMfaWhereInputObjectSchema), z.lazy(() => TotpMfaWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TotpMfaWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TotpMfaWhereInputObjectSchema), z.lazy(() => TotpMfaWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  enabled: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  ciphertext: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  iv: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  authTag: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const TotpMfaWhereInputObjectSchema: z.ZodType<Prisma.TotpMfaWhereInput> = totpmfawhereinputSchema as unknown as z.ZodType<Prisma.TotpMfaWhereInput>;
export const TotpMfaWhereInputObjectZodSchema = totpmfawhereinputSchema;
