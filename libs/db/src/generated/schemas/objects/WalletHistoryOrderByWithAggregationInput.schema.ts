import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { WalletHistoryCountOrderByAggregateInputObjectSchema as WalletHistoryCountOrderByAggregateInputObjectSchema } from './WalletHistoryCountOrderByAggregateInput.schema';
import { WalletHistoryAvgOrderByAggregateInputObjectSchema as WalletHistoryAvgOrderByAggregateInputObjectSchema } from './WalletHistoryAvgOrderByAggregateInput.schema';
import { WalletHistoryMaxOrderByAggregateInputObjectSchema as WalletHistoryMaxOrderByAggregateInputObjectSchema } from './WalletHistoryMaxOrderByAggregateInput.schema';
import { WalletHistoryMinOrderByAggregateInputObjectSchema as WalletHistoryMinOrderByAggregateInputObjectSchema } from './WalletHistoryMinOrderByAggregateInput.schema';
import { WalletHistorySumOrderByAggregateInputObjectSchema as WalletHistorySumOrderByAggregateInputObjectSchema } from './WalletHistorySumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  balance: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  walletId: SortOrderSchema.optional(),
  _count: z.lazy(() => WalletHistoryCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => WalletHistoryAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => WalletHistoryMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => WalletHistoryMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => WalletHistorySumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const WalletHistoryOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.WalletHistoryOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletHistoryOrderByWithAggregationInput>;
export const WalletHistoryOrderByWithAggregationInputObjectZodSchema = makeSchema();
