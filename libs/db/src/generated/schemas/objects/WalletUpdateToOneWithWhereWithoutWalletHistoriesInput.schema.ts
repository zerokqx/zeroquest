import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletWhereInputObjectSchema as WalletWhereInputObjectSchema } from './WalletWhereInput.schema';
import { WalletUpdateWithoutWalletHistoriesInputObjectSchema as WalletUpdateWithoutWalletHistoriesInputObjectSchema } from './WalletUpdateWithoutWalletHistoriesInput.schema';
import { WalletUncheckedUpdateWithoutWalletHistoriesInputObjectSchema as WalletUncheckedUpdateWithoutWalletHistoriesInputObjectSchema } from './WalletUncheckedUpdateWithoutWalletHistoriesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WalletWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => WalletUpdateWithoutWalletHistoriesInputObjectSchema), z.lazy(() => WalletUncheckedUpdateWithoutWalletHistoriesInputObjectSchema)])
}).strict();
export const WalletUpdateToOneWithWhereWithoutWalletHistoriesInputObjectSchema: z.ZodType<Prisma.WalletUpdateToOneWithWhereWithoutWalletHistoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletUpdateToOneWithWhereWithoutWalletHistoriesInput>;
export const WalletUpdateToOneWithWhereWithoutWalletHistoriesInputObjectZodSchema = makeSchema();
