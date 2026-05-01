import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletUpdateWithoutUserInputObjectSchema as WalletUpdateWithoutUserInputObjectSchema } from './WalletUpdateWithoutUserInput.schema';
import { WalletUncheckedUpdateWithoutUserInputObjectSchema as WalletUncheckedUpdateWithoutUserInputObjectSchema } from './WalletUncheckedUpdateWithoutUserInput.schema';
import { WalletCreateWithoutUserInputObjectSchema as WalletCreateWithoutUserInputObjectSchema } from './WalletCreateWithoutUserInput.schema';
import { WalletUncheckedCreateWithoutUserInputObjectSchema as WalletUncheckedCreateWithoutUserInputObjectSchema } from './WalletUncheckedCreateWithoutUserInput.schema';
import { WalletWhereInputObjectSchema as WalletWhereInputObjectSchema } from './WalletWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => WalletUpdateWithoutUserInputObjectSchema), z.lazy(() => WalletUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => WalletCreateWithoutUserInputObjectSchema), z.lazy(() => WalletUncheckedCreateWithoutUserInputObjectSchema)]),
  where: z.lazy(() => WalletWhereInputObjectSchema).optional()
}).strict();
export const WalletUpsertWithoutUserInputObjectSchema: z.ZodType<Prisma.WalletUpsertWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletUpsertWithoutUserInput>;
export const WalletUpsertWithoutUserInputObjectZodSchema = makeSchema();
