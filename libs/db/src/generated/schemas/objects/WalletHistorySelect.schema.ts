import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletArgsObjectSchema as WalletArgsObjectSchema } from './WalletArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  amount: z.boolean().optional(),
  balance: z.boolean().optional(),
  type: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  walletId: z.boolean().optional(),
  wallet: z.union([z.boolean(), z.lazy(() => WalletArgsObjectSchema)]).optional()
}).strict();
export const WalletHistorySelectObjectSchema: z.ZodType<Prisma.WalletHistorySelect> = makeSchema() as unknown as z.ZodType<Prisma.WalletHistorySelect>;
export const WalletHistorySelectObjectZodSchema = makeSchema();
