import * as z from 'zod';
import type { Prisma } from '../../client';
import { RefundStatusSchema } from '../enums/RefundStatus.schema';
import { NestedEnumRefundStatusWithAggregatesFilterObjectSchema as NestedEnumRefundStatusWithAggregatesFilterObjectSchema } from './NestedEnumRefundStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumRefundStatusFilterObjectSchema as NestedEnumRefundStatusFilterObjectSchema } from './NestedEnumRefundStatusFilter.schema'

const makeSchema = () => z.object({
  equals: RefundStatusSchema.optional(),
  in: RefundStatusSchema.array().optional(),
  notIn: RefundStatusSchema.array().optional(),
  not: z.union([RefundStatusSchema, z.lazy(() => NestedEnumRefundStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumRefundStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumRefundStatusFilterObjectSchema).optional()
}).strict();
export const EnumRefundStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumRefundStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumRefundStatusWithAggregatesFilter>;
export const EnumRefundStatusWithAggregatesFilterObjectZodSchema = makeSchema();
