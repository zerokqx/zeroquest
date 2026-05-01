import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumSubscribeStatusFilterObjectSchema as EnumSubscribeStatusFilterObjectSchema } from './EnumSubscribeStatusFilter.schema';
import { SubscribeStatusSchema } from '../enums/SubscribeStatus.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const subscribescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SubscribeScalarWhereInputObjectSchema), z.lazy(() => SubscribeScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SubscribeScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SubscribeScalarWhereInputObjectSchema), z.lazy(() => SubscribeScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  vlessLink: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  vlessClientId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  nextPaymentDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  status: z.union([z.lazy(() => EnumSubscribeStatusFilterObjectSchema), SubscribeStatusSchema]).optional(),
  expiresAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  planId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  totalGb: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const SubscribeScalarWhereInputObjectSchema: z.ZodType<Prisma.SubscribeScalarWhereInput> = subscribescalarwhereinputSchema as unknown as z.ZodType<Prisma.SubscribeScalarWhereInput>;
export const SubscribeScalarWhereInputObjectZodSchema = subscribescalarwhereinputSchema;
