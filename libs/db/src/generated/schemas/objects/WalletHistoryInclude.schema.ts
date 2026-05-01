import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletArgsObjectSchema as WalletArgsObjectSchema } from './WalletArgs.schema'

const makeSchema = () => z.object({
  wallet: z.union([z.boolean(), z.lazy(() => WalletArgsObjectSchema)]).optional()
}).strict();
export const WalletHistoryIncludeObjectSchema: z.ZodType<Prisma.WalletHistoryInclude> = makeSchema() as unknown as z.ZodType<Prisma.WalletHistoryInclude>;
export const WalletHistoryIncludeObjectZodSchema = makeSchema();
