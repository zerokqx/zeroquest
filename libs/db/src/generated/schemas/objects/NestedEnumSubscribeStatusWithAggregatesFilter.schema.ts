import * as z from 'zod';
import type { Prisma } from '../../client';
import { SubscribeStatusSchema } from '../enums/SubscribeStatus.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumSubscribeStatusFilterObjectSchema as NestedEnumSubscribeStatusFilterObjectSchema } from './NestedEnumSubscribeStatusFilter.schema'

const nestedenumsubscribestatuswithaggregatesfilterSchema = z.object({
  equals: SubscribeStatusSchema.optional(),
  in: SubscribeStatusSchema.array().optional(),
  notIn: SubscribeStatusSchema.array().optional(),
  not: z.union([SubscribeStatusSchema, z.lazy(() => NestedEnumSubscribeStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumSubscribeStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumSubscribeStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumSubscribeStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumSubscribeStatusWithAggregatesFilter> = nestedenumsubscribestatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumSubscribeStatusWithAggregatesFilter>;
export const NestedEnumSubscribeStatusWithAggregatesFilterObjectZodSchema = nestedenumsubscribestatuswithaggregatesfilterSchema;
