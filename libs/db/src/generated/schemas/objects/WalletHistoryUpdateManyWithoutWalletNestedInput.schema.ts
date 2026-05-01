import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletHistoryCreateWithoutWalletInputObjectSchema as WalletHistoryCreateWithoutWalletInputObjectSchema } from './WalletHistoryCreateWithoutWalletInput.schema';
import { WalletHistoryUncheckedCreateWithoutWalletInputObjectSchema as WalletHistoryUncheckedCreateWithoutWalletInputObjectSchema } from './WalletHistoryUncheckedCreateWithoutWalletInput.schema';
import { WalletHistoryCreateOrConnectWithoutWalletInputObjectSchema as WalletHistoryCreateOrConnectWithoutWalletInputObjectSchema } from './WalletHistoryCreateOrConnectWithoutWalletInput.schema';
import { WalletHistoryUpsertWithWhereUniqueWithoutWalletInputObjectSchema as WalletHistoryUpsertWithWhereUniqueWithoutWalletInputObjectSchema } from './WalletHistoryUpsertWithWhereUniqueWithoutWalletInput.schema';
import { WalletHistoryCreateManyWalletInputEnvelopeObjectSchema as WalletHistoryCreateManyWalletInputEnvelopeObjectSchema } from './WalletHistoryCreateManyWalletInputEnvelope.schema';
import { WalletHistoryWhereUniqueInputObjectSchema as WalletHistoryWhereUniqueInputObjectSchema } from './WalletHistoryWhereUniqueInput.schema';
import { WalletHistoryUpdateWithWhereUniqueWithoutWalletInputObjectSchema as WalletHistoryUpdateWithWhereUniqueWithoutWalletInputObjectSchema } from './WalletHistoryUpdateWithWhereUniqueWithoutWalletInput.schema';
import { WalletHistoryUpdateManyWithWhereWithoutWalletInputObjectSchema as WalletHistoryUpdateManyWithWhereWithoutWalletInputObjectSchema } from './WalletHistoryUpdateManyWithWhereWithoutWalletInput.schema';
import { WalletHistoryScalarWhereInputObjectSchema as WalletHistoryScalarWhereInputObjectSchema } from './WalletHistoryScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WalletHistoryCreateWithoutWalletInputObjectSchema), z.lazy(() => WalletHistoryCreateWithoutWalletInputObjectSchema).array(), z.lazy(() => WalletHistoryUncheckedCreateWithoutWalletInputObjectSchema), z.lazy(() => WalletHistoryUncheckedCreateWithoutWalletInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WalletHistoryCreateOrConnectWithoutWalletInputObjectSchema), z.lazy(() => WalletHistoryCreateOrConnectWithoutWalletInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => WalletHistoryUpsertWithWhereUniqueWithoutWalletInputObjectSchema), z.lazy(() => WalletHistoryUpsertWithWhereUniqueWithoutWalletInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WalletHistoryCreateManyWalletInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => WalletHistoryWhereUniqueInputObjectSchema), z.lazy(() => WalletHistoryWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => WalletHistoryWhereUniqueInputObjectSchema), z.lazy(() => WalletHistoryWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => WalletHistoryWhereUniqueInputObjectSchema), z.lazy(() => WalletHistoryWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => WalletHistoryWhereUniqueInputObjectSchema), z.lazy(() => WalletHistoryWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => WalletHistoryUpdateWithWhereUniqueWithoutWalletInputObjectSchema), z.lazy(() => WalletHistoryUpdateWithWhereUniqueWithoutWalletInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => WalletHistoryUpdateManyWithWhereWithoutWalletInputObjectSchema), z.lazy(() => WalletHistoryUpdateManyWithWhereWithoutWalletInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => WalletHistoryScalarWhereInputObjectSchema), z.lazy(() => WalletHistoryScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const WalletHistoryUpdateManyWithoutWalletNestedInputObjectSchema: z.ZodType<Prisma.WalletHistoryUpdateManyWithoutWalletNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletHistoryUpdateManyWithoutWalletNestedInput>;
export const WalletHistoryUpdateManyWithoutWalletNestedInputObjectZodSchema = makeSchema();
