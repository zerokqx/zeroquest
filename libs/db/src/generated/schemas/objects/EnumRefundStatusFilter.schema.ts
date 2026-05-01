import * as z from 'zod';
import type { Prisma } from '../../client';
import { RefundStatusSchema } from '../enums/RefundStatus.schema';
import { NestedEnumRefundStatusFilterObjectSchema as NestedEnumRefundStatusFilterObjectSchema } from './NestedEnumRefundStatusFilter.schema'

const makeSchema = () => z.object({
  equals: RefundStatusSchema.optional(),
  in: RefundStatusSchema.array().optional(),
  notIn: RefundStatusSchema.array().optional(),
  not: z.union([RefundStatusSchema, z.lazy(() => NestedEnumRefundStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumRefundStatusFilterObjectSchema: z.ZodType<Prisma.EnumRefundStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumRefundStatusFilter>;
export const EnumRefundStatusFilterObjectZodSchema = makeSchema();
