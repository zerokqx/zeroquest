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
  confirmationUrl: z.string(),
  planId: z.number().int().optional().nullable(),
  refund: z.lazy(() => RefundUncheckedCreateNestedOneWithoutPaymentInputObjectSchema).optional()
}).strict();
export const PaymentUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.PaymentUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUncheckedCreateWithoutUserInput>;
export const PaymentUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
