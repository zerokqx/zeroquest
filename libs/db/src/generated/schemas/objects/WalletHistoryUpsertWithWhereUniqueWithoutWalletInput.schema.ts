import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletHistoryWhereUniqueInputObjectSchema as WalletHistoryWhereUniqueInputObjectSchema } from './WalletHistoryWhereUniqueInput.schema';
import { WalletHistoryUpdateWithoutWalletInputObjectSchema as WalletHistoryUpdateWithoutWalletInputObjectSchema } from './WalletHistoryUpdateWithoutWalletInput.schema';
import { WalletHistoryUncheckedUpdateWithoutWalletInputObjectSchema as WalletHistoryUncheckedUpdateWithoutWalletInputObjectSchema } from './WalletHistoryUncheckedUpdateWithoutWalletInput.schema';
import { WalletHistoryCreateWithoutWalletInputObjectSchema as WalletHistoryCreateWithoutWalletInputObjectSchema } from './WalletHistoryCreateWithoutWalletInput.schema';
import { WalletHistoryUncheckedCreateWithoutWalletInputObjectSchema as WalletHistoryUncheckedCreateWithoutWalletInputObjectSchema } from './WalletHistoryUncheckedCreateWithoutWalletInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WalletHistoryWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => WalletHistoryUpdateWithoutWalletInputObjectSchema), z.lazy(() => WalletHistoryUncheckedUpdateWithoutWalletInputObjectSchema)]),
  create: z.union([z.lazy(() => WalletHistoryCreateWithoutWalletInputObjectSchema), z.lazy(() => WalletHistoryUncheckedCreateWithoutWalletInputObjectSchema)])
}).strict();
export const WalletHistoryUpsertWithWhereUniqueWithoutWalletInputObjectSchema: z.ZodType<Prisma.WalletHistoryUpsertWithWhereUniqueWithoutWalletInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletHistoryUpsertWithWhereUniqueWithoutWalletInput>;
export const WalletHistoryUpsertWithWhereUniqueWithoutWalletInputObjectZodSchema = makeSchema();
