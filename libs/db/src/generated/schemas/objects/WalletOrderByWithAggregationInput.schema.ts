import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { WalletCountOrderByAggregateInputObjectSchema as WalletCountOrderByAggregateInputObjectSchema } from './WalletCountOrderByAggregateInput.schema';
import { WalletAvgOrderByAggregateInputObjectSchema as WalletAvgOrderByAggregateInputObjectSchema } from './WalletAvgOrderByAggregateInput.schema';
import { WalletMaxOrderByAggregateInputObjectSchema as WalletMaxOrderByAggregateInputObjectSchema } from './WalletMaxOrderByAggregateInput.schema';
import { WalletMinOrderByAggregateInputObjectSchema as WalletMinOrderByAggregateInputObjectSchema } from './WalletMinOrderByAggregateInput.schema';
import { WalletSumOrderByAggregateInputObjectSchema as WalletSumOrderByAggregateInputObjectSchema } from './WalletSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  held: SortOrderSchema.optional(),
  balance: SortOrderSchema.optional(),
  _count: z.lazy(() => WalletCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => WalletAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => WalletMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => WalletMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => WalletSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const WalletOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.WalletOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletOrderByWithAggregationInput>;
export const WalletOrderByWithAggregationInputObjectZodSchema = makeSchema();
