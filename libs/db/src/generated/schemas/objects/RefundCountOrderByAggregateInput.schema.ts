import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  paymentId: SortOrderSchema.optional()
}).strict();
export const RefundCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.RefundCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.RefundCountOrderByAggregateInput>;
export const RefundCountOrderByAggregateInputObjectZodSchema = makeSchema();
