import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  providerPaymentId: z.literal(true).optional(),
  status: z.literal(true).optional(),
  currency: z.literal(true).optional(),
  value: z.literal(true).optional(),
  idempotenceKey: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  description: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  confirmationUrl: z.literal(true).optional(),
  planId: z.literal(true).optional()
}).strict();
export const PaymentMaxAggregateInputObjectSchema: z.ZodType<Prisma.PaymentMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PaymentMaxAggregateInputType>;
export const PaymentMaxAggregateInputObjectZodSchema = makeSchema();
