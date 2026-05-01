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
export const WalletHistoryMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WalletHistoryMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletHistoryMaxOrderByAggregateInput>;
export const WalletHistoryMaxOrderByAggregateInputObjectZodSchema = makeSchema();
