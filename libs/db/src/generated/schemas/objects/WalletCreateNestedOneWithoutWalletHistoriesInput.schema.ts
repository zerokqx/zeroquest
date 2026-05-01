import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletCreateWithoutWalletHistoriesInputObjectSchema as WalletCreateWithoutWalletHistoriesInputObjectSchema } from './WalletCreateWithoutWalletHistoriesInput.schema';
import { WalletUncheckedCreateWithoutWalletHistoriesInputObjectSchema as WalletUncheckedCreateWithoutWalletHistoriesInputObjectSchema } from './WalletUncheckedCreateWithoutWalletHistoriesInput.schema';
import { WalletCreateOrConnectWithoutWalletHistoriesInputObjectSchema as WalletCreateOrConnectWithoutWalletHistoriesInputObjectSchema } from './WalletCreateOrConnectWithoutWalletHistoriesInput.schema';
import { WalletWhereUniqueInputObjectSchema as WalletWhereUniqueInputObjectSchema } from './WalletWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WalletCreateWithoutWalletHistoriesInputObjectSchema), z.lazy(() => WalletUncheckedCreateWithoutWalletHistoriesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WalletCreateOrConnectWithoutWalletHistoriesInputObjectSchema).optional(),
  connect: z.lazy(() => WalletWhereUniqueInputObjectSchema).optional()
}).strict();
export const WalletCreateNestedOneWithoutWalletHistoriesInputObjectSchema: z.ZodType<Prisma.WalletCreateNestedOneWithoutWalletHistoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletCreateNestedOneWithoutWalletHistoriesInput>;
export const WalletCreateNestedOneWithoutWalletHistoriesInputObjectZodSchema = makeSchema();
