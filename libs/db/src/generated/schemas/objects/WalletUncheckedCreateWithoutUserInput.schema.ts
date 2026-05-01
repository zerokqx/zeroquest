import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletHistoryUncheckedCreateNestedManyWithoutWalletInputObjectSchema as WalletHistoryUncheckedCreateNestedManyWithoutWalletInputObjectSchema } from './WalletHistoryUncheckedCreateNestedManyWithoutWalletInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  held: z.number().int().optional(),
  balance: z.number().int().optional(),
  walletHistories: z.lazy(() => WalletHistoryUncheckedCreateNestedManyWithoutWalletInputObjectSchema).optional()
}).strict();
export const WalletUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.WalletUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletUncheckedCreateWithoutUserInput>;
export const WalletUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
