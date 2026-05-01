import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  paymentId: SortOrderSchema.optional()
}).strict();
export const RefundMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RefundMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RefundMinOrderByAggregateInput>;
export const RefundMinOrderByAggregateInputObjectZodSchema = makeSchema();
