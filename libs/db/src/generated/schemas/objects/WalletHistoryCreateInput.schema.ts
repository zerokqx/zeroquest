import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletHistoryTypeSchema } from '../enums/WalletHistoryType.schema';
import { WalletCreateNestedOneWithoutWalletHistoriesInputObjectSchema as WalletCreateNestedOneWithoutWalletHistoriesInputObjectSchema } from './WalletCreateNestedOneWithoutWalletHistoriesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  amount: z.number().int(),
  balance: z.number().int(),
  type: WalletHistoryTypeSchema,
  createdAt: z.coerce.date().optional(),
  wallet: z.lazy(() => WalletCreateNestedOneWithoutWalletHistoriesInputObjectSchema)
}).strict();
export const WalletHistoryCreateInputObjectSchema: z.ZodType<Prisma.WalletHistoryCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletHistoryCreateInput>;
export const WalletHistoryCreateInputObjectZodSchema = makeSchema();
