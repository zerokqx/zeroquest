import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ClientTypeScalarRelationFilterObjectSchema as ClientTypeScalarRelationFilterObjectSchema } from './ClientTypeScalarRelationFilter.schema';
import { ClientTypeWhereInputObjectSchema as ClientTypeWhereInputObjectSchema } from './ClientTypeWhereInput.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const sessionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SessionWhereInputObjectSchema), z.lazy(() => SessionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SessionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SessionWhereInputObjectSchema), z.lazy(() => SessionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userAgentHash: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  clientTypeId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  refreshTokenJti: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  accessTokenJti: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  refreshTokenHash: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  clientType: z.union([z.lazy(() => ClientTypeScalarRelationFilterObjectSchema), z.lazy(() => ClientTypeWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const SessionWhereInputObjectSchema: z.ZodType<Prisma.SessionWhereInput> = sessionwhereinputSchema as unknown as z.ZodType<Prisma.SessionWhereInput>;
export const SessionWhereInputObjectZodSchema = sessionwhereinputSchema;
