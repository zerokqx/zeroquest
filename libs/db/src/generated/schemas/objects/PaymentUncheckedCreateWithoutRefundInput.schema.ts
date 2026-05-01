import * as z from 'zod';
import type { Prisma } from '../../client';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema'

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
  planId: z.number().int().optional().nullable()
}).strict();
export const PaymentUncheckedCreateWithoutRefundInputObjectSchema: z.ZodType<Prisma.PaymentUncheckedCreateWithoutRefundInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentUncheckedCreateWithoutRefundInput>;
export const PaymentUncheckedCreateWithoutRefundInputObjectZodSchema = makeSchema();
