import * as z from 'zod';
import type { Prisma } from '../../client';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { UserCreateNestedOneWithoutPaymentsInputObjectSchema as UserCreateNestedOneWithoutPaymentsInputObjectSchema } from './UserCreateNestedOneWithoutPaymentsInput.schema';
import { PlanCreateNestedOneWithoutPaymentsInputObjectSchema as PlanCreateNestedOneWithoutPaymentsInputObjectSchema } from './PlanCreateNestedOneWithoutPaymentsInput.schema'

const makeSchema = () => z.object({
  providerPaymentId: z.string(),
  status: PaymentStatusSchema.optional(),
  currency: z.string().optional(),
  value: z.number().int(),
  idempotenceKey: z.string(),
  createdAt: z.coerce.date().optional(),
  description: z.string().optional().nullable(),
  confirmationUrl: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutPaymentsInputObjectSchema),
  plan: z.lazy(() => PlanCreateNestedOneWithoutPaymentsInputObjectSchema).optional()
}).strict();
export const PaymentCreateWithoutRefundInputObjectSchema: z.ZodType<Prisma.PaymentCreateWithoutRefundInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentCreateWithoutRefundInput>;
export const PaymentCreateWithoutRefundInputObjectZodSchema = makeSchema();
