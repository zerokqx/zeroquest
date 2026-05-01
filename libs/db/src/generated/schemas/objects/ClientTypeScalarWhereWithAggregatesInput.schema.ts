import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const clienttypescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ClientTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ClientTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ClientTypeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ClientTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ClientTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ClientTypeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ClientTypeScalarWhereWithAggregatesInput> = clienttypescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ClientTypeScalarWhereWithAggregatesInput>;
export const ClientTypeScalarWhereWithAggregatesInputObjectZodSchema = clienttypescalarwherewithaggregatesinputSchema;
