import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletHistoryCreateWithoutWalletInputObjectSchema as WalletHistoryCreateWithoutWalletInputObjectSchema } from './WalletHistoryCreateWithoutWalletInput.schema';
import { WalletHistoryUncheckedCreateWithoutWalletInputObjectSchema as WalletHistoryUncheckedCreateWithoutWalletInputObjectSchema } from './WalletHistoryUncheckedCreateWithoutWalletInput.schema';
import { WalletHistoryCreateOrConnectWithoutWalletInputObjectSchema as WalletHistoryCreateOrConnectWithoutWalletInputObjectSchema } from './WalletHistoryCreateOrConnectWithoutWalletInput.schema';
import { WalletHistoryCreateManyWalletInputEnvelopeObjectSchema as WalletHistoryCreateManyWalletInputEnvelopeObjectSchema } from './WalletHistoryCreateManyWalletInputEnvelope.schema';
import { WalletHistoryWhereUniqueInputObjectSchema as WalletHistoryWhereUniqueInputObjectSchema } from './WalletHistoryWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WalletHistoryCreateWithoutWalletInputObjectSchema), z.lazy(() => WalletHistoryCreateWithoutWalletInputObjectSchema).array(), z.lazy(() => WalletHistoryUncheckedCreateWithoutWalletInputObjectSchema), z.lazy(() => WalletHistoryUncheckedCreateWithoutWalletInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WalletHistoryCreateOrConnectWithoutWalletInputObjectSchema), z.lazy(() => WalletHistoryCreateOrConnectWithoutWalletInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WalletHistoryCreateManyWalletInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => WalletHistoryWhereUniqueInputObjectSchema), z.lazy(() => WalletHistoryWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const WalletHistoryUncheckedCreateNestedManyWithoutWalletInputObjectSchema: z.ZodType<Prisma.WalletHistoryUncheckedCreateNestedManyWithoutWalletInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletHistoryUncheckedCreateNestedManyWithoutWalletInput>;
export const WalletHistoryUncheckedCreateNestedManyWithoutWalletInputObjectZodSchema = makeSchema();
