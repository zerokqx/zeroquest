import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserUncheckedCreateNestedOneWithoutWalletInputObjectSchema as UserUncheckedCreateNestedOneWithoutWalletInputObjectSchema } from './UserUncheckedCreateNestedOneWithoutWalletInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  held: z.number().int().optional(),
  balance: z.number().int().optional(),
  user: z.lazy(() => UserUncheckedCreateNestedOneWithoutWalletInputObjectSchema).optional()
}).strict();
export const WalletUncheckedCreateWithoutWalletHistoriesInputObjectSchema: z.ZodType<Prisma.WalletUncheckedCreateWithoutWalletHistoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletUncheckedCreateWithoutWalletHistoriesInput>;
export const WalletUncheckedCreateWithoutWalletHistoriesInputObjectZodSchema = makeSchema();
