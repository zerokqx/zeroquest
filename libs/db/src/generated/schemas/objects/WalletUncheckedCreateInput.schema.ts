import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserUncheckedCreateNestedOneWithoutWalletInputObjectSchema as UserUncheckedCreateNestedOneWithoutWalletInputObjectSchema } from './UserUncheckedCreateNestedOneWithoutWalletInput.schema';
import { WalletHistoryUncheckedCreateNestedManyWithoutWalletInputObjectSchema as WalletHistoryUncheckedCreateNestedManyWithoutWalletInputObjectSchema } from './WalletHistoryUncheckedCreateNestedManyWithoutWalletInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  held: z.number().int().optional(),
  balance: z.number().int().optional(),
  user: z.lazy(() => UserUncheckedCreateNestedOneWithoutWalletInputObjectSchema).optional(),
  walletHistories: z.lazy(() => WalletHistoryUncheckedCreateNestedManyWithoutWalletInputObjectSchema).optional()
}).strict();
export const WalletUncheckedCreateInputObjectSchema: z.ZodType<Prisma.WalletUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletUncheckedCreateInput>;
export const WalletUncheckedCreateInputObjectZodSchema = makeSchema();
