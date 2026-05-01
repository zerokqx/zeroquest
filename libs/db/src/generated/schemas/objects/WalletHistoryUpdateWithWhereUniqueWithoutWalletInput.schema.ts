import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletHistoryWhereUniqueInputObjectSchema as WalletHistoryWhereUniqueInputObjectSchema } from './WalletHistoryWhereUniqueInput.schema';
import { WalletHistoryUpdateWithoutWalletInputObjectSchema as WalletHistoryUpdateWithoutWalletInputObjectSchema } from './WalletHistoryUpdateWithoutWalletInput.schema';
import { WalletHistoryUncheckedUpdateWithoutWalletInputObjectSchema as WalletHistoryUncheckedUpdateWithoutWalletInputObjectSchema } from './WalletHistoryUncheckedUpdateWithoutWalletInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WalletHistoryWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => WalletHistoryUpdateWithoutWalletInputObjectSchema), z.lazy(() => WalletHistoryUncheckedUpdateWithoutWalletInputObjectSchema)])
}).strict();
export const WalletHistoryUpdateWithWhereUniqueWithoutWalletInputObjectSchema: z.ZodType<Prisma.WalletHistoryUpdateWithWhereUniqueWithoutWalletInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletHistoryUpdateWithWhereUniqueWithoutWalletInput>;
export const WalletHistoryUpdateWithWhereUniqueWithoutWalletInputObjectZodSchema = makeSchema();
