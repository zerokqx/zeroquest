import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletHistoryWhereInputObjectSchema as WalletHistoryWhereInputObjectSchema } from './WalletHistoryWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WalletHistoryWhereInputObjectSchema).optional()
}).strict();
export const WalletCountOutputTypeCountWalletHistoriesArgsObjectSchema = makeSchema();
export const WalletCountOutputTypeCountWalletHistoriesArgsObjectZodSchema = makeSchema();
