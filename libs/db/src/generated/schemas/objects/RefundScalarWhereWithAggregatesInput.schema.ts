import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { EnumRefundStatusWithAggregatesFilterObjectSchema as EnumRefundStatusWithAggregatesFilterObjectSchema } from './EnumRefundStatusWithAggregatesFilter.schema';
import { RefundStatusSchema } from '../enums/RefundStatus.schema'

const refundscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => RefundScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RefundScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RefundScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RefundScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => RefundScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  status: z.union([z.lazy(() => EnumRefundStatusWithAggregatesFilterObjectSchema), RefundStatusSchema]).optional(),
  paymentId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const RefundScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.RefundScalarWhereWithAggregatesInput> = refundscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.RefundScalarWhereWithAggregatesInput>;
export const RefundScalarWhereWithAggregatesInputObjectZodSchema = refundscalarwherewithaggregatesinputSchema;
