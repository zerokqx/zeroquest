import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { WalletHistoryFindManySchema as WalletHistoryFindManySchema } from '../findManyWalletHistory.schema';
import { WalletCountOutputTypeArgsObjectSchema as WalletCountOutputTypeArgsObjectSchema } from './WalletCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  held: z.boolean().optional(),
  balance: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  walletHistories: z.union([z.boolean(), z.lazy(() => WalletHistoryFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => WalletCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const WalletSelectObjectSchema: z.ZodType<Prisma.WalletSelect> = makeSchema() as unknown as z.ZodType<Prisma.WalletSelect>;
export const WalletSelectObjectZodSchema = makeSchema();
