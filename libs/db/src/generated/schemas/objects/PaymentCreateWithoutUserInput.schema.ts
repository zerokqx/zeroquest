import * as z from 'zod';
import type { Prisma } from '../../client';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { RefundCreateNestedOneWithoutPaymentInputObjectSchema as RefundCreateNestedOneWithoutPaymentInputObjectSchema } from './RefundCreateNestedOneWithoutPaymentInput.schema';
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
  refund: z.lazy(() => RefundCreateNestedOneWithoutPaymentInputObjectSchema).optional(),
  plan: z.lazy(() => PlanCreateNestedOneWithoutPaymentsInputObjectSchema).optional()
}).strict();
export const PaymentCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.PaymentCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentCreateWithoutUserInput>;
export const PaymentCreateWithoutUserInputObjectZodSchema = makeSchema();
