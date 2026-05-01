import * as z from 'zod';
import type { Prisma } from '../../client';
import { PaymentArgsObjectSchema as PaymentArgsObjectSchema } from './PaymentArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  status: z.boolean().optional(),
  payment: z.union([z.boolean(), z.lazy(() => PaymentArgsObjectSchema)]).optional(),
  paymentId: z.boolean().optional()
}).strict();
export const RefundSelectObjectSchema: z.ZodType<Prisma.RefundSelect> = makeSchema() as unknown as z.ZodType<Prisma.RefundSelect>;
export const RefundSelectObjectZodSchema = makeSchema();
