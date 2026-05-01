import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { RefundArgsObjectSchema as RefundArgsObjectSchema } from './RefundArgs.schema';
import { PlanArgsObjectSchema as PlanArgsObjectSchema } from './PlanArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  providerPaymentId: z.boolean().optional(),
  status: z.boolean().optional(),
  currency: z.boolean().optional(),
  value: z.boolean().optional(),
  idempotenceKey: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  description: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  userId: z.boolean().optional(),
  refund: z.union([z.boolean(), z.lazy(() => RefundArgsObjectSchema)]).optional(),
  confirmationUrl: z.boolean().optional(),
  plan: z.union([z.boolean(), z.lazy(() => PlanArgsObjectSchema)]).optional(),
  planId: z.boolean().optional()
}).strict();
export const PaymentSelectObjectSchema: z.ZodType<Prisma.PaymentSelect> = makeSchema() as unknown as z.ZodType<Prisma.PaymentSelect>;
export const PaymentSelectObjectZodSchema = makeSchema();
