import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PaymentOrderByWithRelationInputObjectSchema as PaymentOrderByWithRelationInputObjectSchema } from './PaymentOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  paymentId: SortOrderSchema.optional(),
  payment: z.lazy(() => PaymentOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const RefundOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.RefundOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.RefundOrderByWithRelationInput>;
export const RefundOrderByWithRelationInputObjectZodSchema = makeSchema();
