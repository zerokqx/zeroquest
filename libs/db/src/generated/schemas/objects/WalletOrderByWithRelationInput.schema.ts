import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { WalletHistoryOrderByRelationAggregateInputObjectSchema as WalletHistoryOrderByRelationAggregateInputObjectSchema } from './WalletHistoryOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  held: SortOrderSchema.optional(),
  balance: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  walletHistories: z.lazy(() => WalletHistoryOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const WalletOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.WalletOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletOrderByWithRelationInput>;
export const WalletOrderByWithRelationInputObjectZodSchema = makeSchema();
