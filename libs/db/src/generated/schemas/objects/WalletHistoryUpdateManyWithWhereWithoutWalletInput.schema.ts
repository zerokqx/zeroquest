import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletHistoryScalarWhereInputObjectSchema as WalletHistoryScalarWhereInputObjectSchema } from './WalletHistoryScalarWhereInput.schema';
import { WalletHistoryUpdateManyMutationInputObjectSchema as WalletHistoryUpdateManyMutationInputObjectSchema } from './WalletHistoryUpdateManyMutationInput.schema';
import { WalletHistoryUncheckedUpdateManyWithoutWalletInputObjectSchema as WalletHistoryUncheckedUpdateManyWithoutWalletInputObjectSchema } from './WalletHistoryUncheckedUpdateManyWithoutWalletInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WalletHistoryScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => WalletHistoryUpdateManyMutationInputObjectSchema), z.lazy(() => WalletHistoryUncheckedUpdateManyWithoutWalletInputObjectSchema)])
}).strict();
export const WalletHistoryUpdateManyWithWhereWithoutWalletInputObjectSchema: z.ZodType<Prisma.WalletHistoryUpdateManyWithWhereWithoutWalletInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletHistoryUpdateManyWithWhereWithoutWalletInput>;
export const WalletHistoryUpdateManyWithWhereWithoutWalletInputObjectZodSchema = makeSchema();
