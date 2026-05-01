import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { WalletHistoryFindManySchema as WalletHistoryFindManySchema } from '../findManyWalletHistory.schema';
import { WalletCountOutputTypeArgsObjectSchema as WalletCountOutputTypeArgsObjectSchema } from './WalletCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  walletHistories: z.union([z.boolean(), z.lazy(() => WalletHistoryFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => WalletCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const WalletIncludeObjectSchema: z.ZodType<Prisma.WalletInclude> = makeSchema() as unknown as z.ZodType<Prisma.WalletInclude>;
export const WalletIncludeObjectZodSchema = makeSchema();
