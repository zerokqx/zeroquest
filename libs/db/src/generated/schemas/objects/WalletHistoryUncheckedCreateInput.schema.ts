import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletHistoryTypeSchema } from '../enums/WalletHistoryType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  amount: z.number().int(),
  balance: z.number().int(),
  type: WalletHistoryTypeSchema,
  createdAt: z.coerce.date().optional(),
  walletId: z.string()
}).strict();
export const WalletHistoryUncheckedCreateInputObjectSchema: z.ZodType<Prisma.WalletHistoryUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletHistoryUncheckedCreateInput>;
export const WalletHistoryUncheckedCreateInputObjectZodSchema = makeSchema();
