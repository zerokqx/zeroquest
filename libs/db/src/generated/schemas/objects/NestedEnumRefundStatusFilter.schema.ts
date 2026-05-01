import * as z from 'zod';
import type { Prisma } from '../../client';
import { RefundStatusSchema } from '../enums/RefundStatus.schema'

const nestedenumrefundstatusfilterSchema = z.object({
  equals: RefundStatusSchema.optional(),
  in: RefundStatusSchema.array().optional(),
  notIn: RefundStatusSchema.array().optional(),
  not: z.union([RefundStatusSchema, z.lazy(() => NestedEnumRefundStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumRefundStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumRefundStatusFilter> = nestedenumrefundstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumRefundStatusFilter>;
export const NestedEnumRefundStatusFilterObjectZodSchema = nestedenumrefundstatusfilterSchema;
