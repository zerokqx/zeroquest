import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumRefundStatusFilterObjectSchema as EnumRefundStatusFilterObjectSchema } from './EnumRefundStatusFilter.schema';
import { RefundStatusSchema } from '../enums/RefundStatus.schema';
import { PaymentScalarRelationFilterObjectSchema as PaymentScalarRelationFilterObjectSchema } from './PaymentScalarRelationFilter.schema';
import { PaymentWhereInputObjectSchema as PaymentWhereInputObjectSchema } from './PaymentWhereInput.schema'

const refundwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => RefundWhereInputObjectSchema), z.lazy(() => RefundWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => RefundWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => RefundWhereInputObjectSchema), z.lazy(() => RefundWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  status: z.union([z.lazy(() => EnumRefundStatusFilterObjectSchema), RefundStatusSchema]).optional(),
  paymentId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  payment: z.union([z.lazy(() => PaymentScalarRelationFilterObjectSchema), z.lazy(() => PaymentWhereInputObjectSchema)]).optional()
}).strict();
export const RefundWhereInputObjectSchema: z.ZodType<Prisma.RefundWhereInput> = refundwhereinputSchema as unknown as z.ZodType<Prisma.RefundWhereInput>;
export const RefundWhereInputObjectZodSchema = refundwhereinputSchema;
