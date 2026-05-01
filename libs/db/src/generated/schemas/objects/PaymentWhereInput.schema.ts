import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumPaymentStatusFilterObjectSchema as EnumPaymentStatusFilterObjectSchema } from './EnumPaymentStatusFilter.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { RefundNullableScalarRelationFilterObjectSchema as RefundNullableScalarRelationFilterObjectSchema } from './RefundNullableScalarRelationFilter.schema';
import { RefundWhereInputObjectSchema as RefundWhereInputObjectSchema } from './RefundWhereInput.schema';
import { PlanNullableScalarRelationFilterObjectSchema as PlanNullableScalarRelationFilterObjectSchema } from './PlanNullableScalarRelationFilter.schema';
import { PlanWhereInputObjectSchema as PlanWhereInputObjectSchema } from './PlanWhereInput.schema'

const paymentwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PaymentWhereInputObjectSchema), z.lazy(() => PaymentWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PaymentWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PaymentWhereInputObjectSchema), z.lazy(() => PaymentWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  providerPaymentId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumPaymentStatusFilterObjectSchema), PaymentStatusSchema]).optional(),
  currency: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  value: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  idempotenceKey: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  confirmationUrl: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  planId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  refund: z.union([z.lazy(() => RefundNullableScalarRelationFilterObjectSchema), z.lazy(() => RefundWhereInputObjectSchema)]).optional(),
  plan: z.union([z.lazy(() => PlanNullableScalarRelationFilterObjectSchema), z.lazy(() => PlanWhereInputObjectSchema)]).optional()
}).strict();
export const PaymentWhereInputObjectSchema: z.ZodType<Prisma.PaymentWhereInput> = paymentwhereinputSchema as unknown as z.ZodType<Prisma.PaymentWhereInput>;
export const PaymentWhereInputObjectZodSchema = paymentwhereinputSchema;
