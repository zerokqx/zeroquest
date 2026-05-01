import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  amount: z.literal(true).optional(),
  balance: z.literal(true).optional(),
  type: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  walletId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const WalletHistoryCountAggregateInputObjectSchema: z.ZodType<Prisma.WalletHistoryCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WalletHistoryCountAggregateInputType>;
export const WalletHistoryCountAggregateInputObjectZodSchema = makeSchema();
