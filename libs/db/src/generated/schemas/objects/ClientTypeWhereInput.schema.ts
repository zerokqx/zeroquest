import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const clienttypewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ClientTypeWhereInputObjectSchema), z.lazy(() => ClientTypeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ClientTypeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ClientTypeWhereInputObjectSchema), z.lazy(() => ClientTypeWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ClientTypeWhereInputObjectSchema: z.ZodType<Prisma.ClientTypeWhereInput> = clienttypewhereinputSchema as unknown as z.ZodType<Prisma.ClientTypeWhereInput>;
export const ClientTypeWhereInputObjectZodSchema = clienttypewhereinputSchema;
