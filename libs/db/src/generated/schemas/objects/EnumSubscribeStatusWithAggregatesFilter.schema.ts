import * as z from 'zod';
import type { Prisma } from '../../client';
import { SubscribeStatusSchema } from '../enums/SubscribeStatus.schema';
import { NestedEnumSubscribeStatusWithAggregatesFilterObjectSchema as NestedEnumSubscribeStatusWithAggregatesFilterObjectSchema } from './NestedEnumSubscribeStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumSubscribeStatusFilterObjectSchema as NestedEnumSubscribeStatusFilterObjectSchema } from './NestedEnumSubscribeStatusFilter.schema'

const makeSchema = () => z.object({
  equals: SubscribeStatusSchema.optional(),
  in: SubscribeStatusSchema.array().optional(),
  notIn: SubscribeStatusSchema.array().optional(),
  not: z.union([SubscribeStatusSchema, z.lazy(() => NestedEnumSubscribeStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumSubscribeStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumSubscribeStatusFilterObjectSchema).optional()
}).strict();
export const EnumSubscribeStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumSubscribeStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumSubscribeStatusWithAggregatesFilter>;
export const EnumSubscribeStatusWithAggregatesFilterObjectZodSchema = makeSchema();
