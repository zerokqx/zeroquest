import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletCreateWithoutWalletHistoriesInputObjectSchema as WalletCreateWithoutWalletHistoriesInputObjectSchema } from './WalletCreateWithoutWalletHistoriesInput.schema';
import { WalletUncheckedCreateWithoutWalletHistoriesInputObjectSchema as WalletUncheckedCreateWithoutWalletHistoriesInputObjectSchema } from './WalletUncheckedCreateWithoutWalletHistoriesInput.schema';
import { WalletCreateOrConnectWithoutWalletHistoriesInputObjectSchema as WalletCreateOrConnectWithoutWalletHistoriesInputObjectSchema } from './WalletCreateOrConnectWithoutWalletHistoriesInput.schema';
import { WalletUpsertWithoutWalletHistoriesInputObjectSchema as WalletUpsertWithoutWalletHistoriesInputObjectSchema } from './WalletUpsertWithoutWalletHistoriesInput.schema';
import { WalletWhereUniqueInputObjectSchema as WalletWhereUniqueInputObjectSchema } from './WalletWhereUniqueInput.schema';
import { WalletUpdateToOneWithWhereWithoutWalletHistoriesInputObjectSchema as WalletUpdateToOneWithWhereWithoutWalletHistoriesInputObjectSchema } from './WalletUpdateToOneWithWhereWithoutWalletHistoriesInput.schema';
import { WalletUpdateWithoutWalletHistoriesInputObjectSchema as WalletUpdateWithoutWalletHistoriesInputObjectSchema } from './WalletUpdateWithoutWalletHistoriesInput.schema';
import { WalletUncheckedUpdateWithoutWalletHistoriesInputObjectSchema as WalletUncheckedUpdateWithoutWalletHistoriesInputObjectSchema } from './WalletUncheckedUpdateWithoutWalletHistoriesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WalletCreateWithoutWalletHistoriesInputObjectSchema), z.lazy(() => WalletUncheckedCreateWithoutWalletHistoriesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WalletCreateOrConnectWithoutWalletHistoriesInputObjectSchema).optional(),
  upsert: z.lazy(() => WalletUpsertWithoutWalletHistoriesInputObjectSchema).optional(),
  connect: z.lazy(() => WalletWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => WalletUpdateToOneWithWhereWithoutWalletHistoriesInputObjectSchema), z.lazy(() => WalletUpdateWithoutWalletHistoriesInputObjectSchema), z.lazy(() => WalletUncheckedUpdateWithoutWalletHistoriesInputObjectSchema)]).optional()
}).strict();
export const WalletUpdateOneRequiredWithoutWalletHistoriesNestedInputObjectSchema: z.ZodType<Prisma.WalletUpdateOneRequiredWithoutWalletHistoriesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletUpdateOneRequiredWithoutWalletHistoriesNestedInput>;
export const WalletUpdateOneRequiredWithoutWalletHistoriesNestedInputObjectZodSchema = makeSchema();
