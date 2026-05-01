import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  amount: SortOrderSchema.optional(),
  balance: SortOrderSchema.optional()
}).strict();
export const WalletHistoryAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WalletHistoryAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletHistoryAvgOrderByAggregateInput>;
export const WalletHistoryAvgOrderByAggregateInputObjectZodSchema = makeSchema();
