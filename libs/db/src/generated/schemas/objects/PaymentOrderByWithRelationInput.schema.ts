import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { RefundOrderByWithRelationInputObjectSchema as RefundOrderByWithRelationInputObjectSchema } from './RefundOrderByWithRelationInput.schema';
import { PlanOrderByWithRelationInputObjectSchema as PlanOrderByWithRelationInputObjectSchema } from './PlanOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  providerPaymentId: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  currency: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  idempotenceKey: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userId: SortOrderSchema.optional(),
  confirmationUrl: SortOrderSchema.optional(),
  planId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  refund: z.lazy(() => RefundOrderByWithRelationInputObjectSchema).optional(),
  plan: z.lazy(() => PlanOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const PaymentOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PaymentOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentOrderByWithRelationInput>;
export const PaymentOrderByWithRelationInputObjectZodSchema = makeSchema();
