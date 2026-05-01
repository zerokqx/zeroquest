import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserCreateNestedOneWithoutWalletInputObjectSchema as UserCreateNestedOneWithoutWalletInputObjectSchema } from './UserCreateNestedOneWithoutWalletInput.schema';
import { WalletHistoryCreateNestedManyWithoutWalletInputObjectSchema as WalletHistoryCreateNestedManyWithoutWalletInputObjectSchema } from './WalletHistoryCreateNestedManyWithoutWalletInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  held: z.number().int().optional(),
  balance: z.number().int().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutWalletInputObjectSchema).optional(),
  walletHistories: z.lazy(() => WalletHistoryCreateNestedManyWithoutWalletInputObjectSchema).optional()
}).strict();
export const WalletCreateInputObjectSchema: z.ZodType<Prisma.WalletCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletCreateInput>;
export const WalletCreateInputObjectZodSchema = makeSchema();
