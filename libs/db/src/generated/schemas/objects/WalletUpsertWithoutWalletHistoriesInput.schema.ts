import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletUpdateWithoutWalletHistoriesInputObjectSchema as WalletUpdateWithoutWalletHistoriesInputObjectSchema } from './WalletUpdateWithoutWalletHistoriesInput.schema';
import { WalletUncheckedUpdateWithoutWalletHistoriesInputObjectSchema as WalletUncheckedUpdateWithoutWalletHistoriesInputObjectSchema } from './WalletUncheckedUpdateWithoutWalletHistoriesInput.schema';
import { WalletCreateWithoutWalletHistoriesInputObjectSchema as WalletCreateWithoutWalletHistoriesInputObjectSchema } from './WalletCreateWithoutWalletHistoriesInput.schema';
import { WalletUncheckedCreateWithoutWalletHistoriesInputObjectSchema as WalletUncheckedCreateWithoutWalletHistoriesInputObjectSchema } from './WalletUncheckedCreateWithoutWalletHistoriesInput.schema';
import { WalletWhereInputObjectSchema as WalletWhereInputObjectSchema } from './WalletWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => WalletUpdateWithoutWalletHistoriesInputObjectSchema), z.lazy(() => WalletUncheckedUpdateWithoutWalletHistoriesInputObjectSchema)]),
  create: z.union([z.lazy(() => WalletCreateWithoutWalletHistoriesInputObjectSchema), z.lazy(() => WalletUncheckedCreateWithoutWalletHistoriesInputObjectSchema)]),
  where: z.lazy(() => WalletWhereInputObjectSchema).optional()
}).strict();
export const WalletUpsertWithoutWalletHistoriesInputObjectSchema: z.ZodType<Prisma.WalletUpsertWithoutWalletHistoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletUpsertWithoutWalletHistoriesInput>;
export const WalletUpsertWithoutWalletHistoriesInputObjectZodSchema = makeSchema();
