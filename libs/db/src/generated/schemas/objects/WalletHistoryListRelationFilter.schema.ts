import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletHistoryWhereInputObjectSchema as WalletHistoryWhereInputObjectSchema } from './WalletHistoryWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => WalletHistoryWhereInputObjectSchema).optional(),
  some: z.lazy(() => WalletHistoryWhereInputObjectSchema).optional(),
  none: z.lazy(() => WalletHistoryWhereInputObjectSchema).optional()
}).strict();
export const WalletHistoryListRelationFilterObjectSchema: z.ZodType<Prisma.WalletHistoryListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.WalletHistoryListRelationFilter>;
export const WalletHistoryListRelationFilterObjectZodSchema = makeSchema();
