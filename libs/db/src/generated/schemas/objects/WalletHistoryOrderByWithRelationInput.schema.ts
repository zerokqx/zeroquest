import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { WalletOrderByWithRelationInputObjectSchema as WalletOrderByWithRelationInputObjectSchema } from './WalletOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  balance: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  walletId: SortOrderSchema.optional(),
  wallet: z.lazy(() => WalletOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const WalletHistoryOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.WalletHistoryOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletHistoryOrderByWithRelationInput>;
export const WalletHistoryOrderByWithRelationInputObjectZodSchema = makeSchema();
