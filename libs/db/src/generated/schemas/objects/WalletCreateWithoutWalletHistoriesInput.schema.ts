import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserCreateNestedOneWithoutWalletInputObjectSchema as UserCreateNestedOneWithoutWalletInputObjectSchema } from './UserCreateNestedOneWithoutWalletInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  held: z.number().int().optional(),
  balance: z.number().int().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutWalletInputObjectSchema).optional()
}).strict();
export const WalletCreateWithoutWalletHistoriesInputObjectSchema: z.ZodType<Prisma.WalletCreateWithoutWalletHistoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletCreateWithoutWalletHistoriesInput>;
export const WalletCreateWithoutWalletHistoriesInputObjectZodSchema = makeSchema();
