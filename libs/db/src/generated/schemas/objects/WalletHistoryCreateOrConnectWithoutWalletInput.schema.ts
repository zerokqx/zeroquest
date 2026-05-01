import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletHistoryWhereUniqueInputObjectSchema as WalletHistoryWhereUniqueInputObjectSchema } from './WalletHistoryWhereUniqueInput.schema';
import { WalletHistoryCreateWithoutWalletInputObjectSchema as WalletHistoryCreateWithoutWalletInputObjectSchema } from './WalletHistoryCreateWithoutWalletInput.schema';
import { WalletHistoryUncheckedCreateWithoutWalletInputObjectSchema as WalletHistoryUncheckedCreateWithoutWalletInputObjectSchema } from './WalletHistoryUncheckedCreateWithoutWalletInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WalletHistoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WalletHistoryCreateWithoutWalletInputObjectSchema), z.lazy(() => WalletHistoryUncheckedCreateWithoutWalletInputObjectSchema)])
}).strict();
export const WalletHistoryCreateOrConnectWithoutWalletInputObjectSchema: z.ZodType<Prisma.WalletHistoryCreateOrConnectWithoutWalletInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletHistoryCreateOrConnectWithoutWalletInput>;
export const WalletHistoryCreateOrConnectWithoutWalletInputObjectZodSchema = makeSchema();
