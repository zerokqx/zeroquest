import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  balance: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  walletId: SortOrderSchema.optional()
}).strict();
export const WalletHistoryMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WalletHistoryMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletHistoryMinOrderByAggregateInput>;
export const WalletHistoryMinOrderByAggregateInputObjectZodSchema = makeSchema();
