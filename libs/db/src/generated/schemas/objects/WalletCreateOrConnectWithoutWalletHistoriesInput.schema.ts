import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletWhereUniqueInputObjectSchema as WalletWhereUniqueInputObjectSchema } from './WalletWhereUniqueInput.schema';
import { WalletCreateWithoutWalletHistoriesInputObjectSchema as WalletCreateWithoutWalletHistoriesInputObjectSchema } from './WalletCreateWithoutWalletHistoriesInput.schema';
import { WalletUncheckedCreateWithoutWalletHistoriesInputObjectSchema as WalletUncheckedCreateWithoutWalletHistoriesInputObjectSchema } from './WalletUncheckedCreateWithoutWalletHistoriesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WalletWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WalletCreateWithoutWalletHistoriesInputObjectSchema), z.lazy(() => WalletUncheckedCreateWithoutWalletHistoriesInputObjectSchema)])
}).strict();
export const WalletCreateOrConnectWithoutWalletHistoriesInputObjectSchema: z.ZodType<Prisma.WalletCreateOrConnectWithoutWalletHistoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletCreateOrConnectWithoutWalletHistoriesInput>;
export const WalletCreateOrConnectWithoutWalletHistoriesInputObjectZodSchema = makeSchema();
