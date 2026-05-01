import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletCountOutputTypeCountWalletHistoriesArgsObjectSchema as WalletCountOutputTypeCountWalletHistoriesArgsObjectSchema } from './WalletCountOutputTypeCountWalletHistoriesArgs.schema'

const makeSchema = () => z.object({
  walletHistories: z.union([z.boolean(), z.lazy(() => WalletCountOutputTypeCountWalletHistoriesArgsObjectSchema)]).optional()
}).strict();
export const WalletCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.WalletCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.WalletCountOutputTypeSelect>;
export const WalletCountOutputTypeSelectObjectZodSchema = makeSchema();
