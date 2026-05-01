import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletHistoryCreateNestedManyWithoutWalletInputObjectSchema as WalletHistoryCreateNestedManyWithoutWalletInputObjectSchema } from './WalletHistoryCreateNestedManyWithoutWalletInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  held: z.number().int().optional(),
  balance: z.number().int().optional(),
  walletHistories: z.lazy(() => WalletHistoryCreateNestedManyWithoutWalletInputObjectSchema).optional()
}).strict();
export const WalletCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.WalletCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletCreateWithoutUserInput>;
export const WalletCreateWithoutUserInputObjectZodSchema = makeSchema();
