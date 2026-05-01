import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { EnumSubscribeStatusWithAggregatesFilterObjectSchema as EnumSubscribeStatusWithAggregatesFilterObjectSchema } from './EnumSubscribeStatusWithAggregatesFilter.schema';
import { SubscribeStatusSchema } from '../enums/SubscribeStatus.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const subscribescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => SubscribeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SubscribeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SubscribeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SubscribeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SubscribeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  vlessLink: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  vlessClientId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  nextPaymentDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  status: z.union([z.lazy(() => EnumSubscribeStatusWithAggregatesFilterObjectSchema), SubscribeStatusSchema]).optional(),
  expiresAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  planId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  totalGb: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const SubscribeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.SubscribeScalarWhereWithAggregatesInput> = subscribescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.SubscribeScalarWhereWithAggregatesInput>;
export const SubscribeScalarWhereWithAggregatesInputObjectZodSchema = subscribescalarwherewithaggregatesinputSchema;
