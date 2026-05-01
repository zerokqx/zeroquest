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
export const WalletHistoryCreateManyInputObjectSchema: z.ZodType<Prisma.WalletHistoryCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletHistoryCreateManyInput>;
export const WalletHistoryCreateManyInputObjectZodSchema = makeSchema();
