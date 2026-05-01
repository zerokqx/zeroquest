import * as z from 'zod';
import type { Prisma } from '../../client';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { UserCreateNestedOneWithoutPaymentsInputObjectSchema as UserCreateNestedOneWithoutPaymentsInputObjectSchema } from './UserCreateNestedOneWithoutPaymentsInput.schema';
import { RefundCreateNestedOneWithoutPaymentInputObjectSchema as RefundCreateNestedOneWithoutPaymentInputObjectSchema } from './RefundCreateNestedOneWithoutPaymentInput.schema'

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
  refund: z.lazy(() => RefundCreateNestedOneWithoutPaymentInputObjectSchema).optional()
}).strict();
export const PaymentCreateWithoutPlanInputObjectSchema: z.ZodType<Prisma.PaymentCreateWithoutPlanInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentCreateWithoutPlanInput>;
export const PaymentCreateWithoutPlanInputObjectZodSchema = makeSchema();
