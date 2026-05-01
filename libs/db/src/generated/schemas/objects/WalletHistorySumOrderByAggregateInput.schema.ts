import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  amount: SortOrderSchema.optional(),
  balance: SortOrderSchema.optional()
}).strict();
export const WalletHistorySumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WalletHistorySumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletHistorySumOrderByAggregateInput>;
export const WalletHistorySumOrderByAggregateInputObjectZodSchema = makeSchema();
