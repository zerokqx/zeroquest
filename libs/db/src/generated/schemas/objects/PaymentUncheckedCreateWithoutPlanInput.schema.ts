import * as z from 'zod';
import type { Prisma } from '../../client';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { RefundUncheckedCreateNestedOneWithoutPaymentInputObjectSchema as RefundUncheckedCreateNestedOneWithoutPaymentInputObjectSchema } from './RefundUncheckedCreateNestedOneWithoutPaymentInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  providerPaymentId: z.string(),
  status: PaymentStatusSchema.optional(),
  currency: z.string().optional(),
  value: z.number().int(),
  idempotenceKey: z.string(),
  createdAt: z.coerce.date().optional(),
  description: z.string().optional().nullable(),
  userId: z.string(),
  confirmationUrl: z.string(),
  refund: z.lazy(() => RefundUncheckedCreateNestedOneWithoutPaymentInputObjectSchema).optional()
}).strict();
export const PaymentUncheckedCreateWithoutPlanInputObjectSchema: z.ZodType<Prisma.PaymentUncheckedCreateWithoutPlanInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUncheckedCreateWithoutPlanInput>;
export const PaymentUncheckedCreateWithoutPlanInputObjectZodSchema = makeSchema();
