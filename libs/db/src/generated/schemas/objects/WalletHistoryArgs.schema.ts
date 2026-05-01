import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletHistorySelectObjectSchema as WalletHistorySelectObjectSchema } from './WalletHistorySelect.schema';
import { WalletHistoryIncludeObjectSchema as WalletHistoryIncludeObjectSchema } from './WalletHistoryInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => WalletHistorySelectObjectSchema).optional(),
  include: z.lazy(() => WalletHistoryIncludeObjectSchema).optional()
}).strict();
export const WalletHistoryArgsObjectSchema = makeSchema();
export const WalletHistoryArgsObjectZodSchema = makeSchema();
