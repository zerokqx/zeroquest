import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletCreateWithoutUserInputObjectSchema as WalletCreateWithoutUserInputObjectSchema } from './WalletCreateWithoutUserInput.schema';
import { WalletUncheckedCreateWithoutUserInputObjectSchema as WalletUncheckedCreateWithoutUserInputObjectSchema } from './WalletUncheckedCreateWithoutUserInput.schema';
import { WalletCreateOrConnectWithoutUserInputObjectSchema as WalletCreateOrConnectWithoutUserInputObjectSchema } from './WalletCreateOrConnectWithoutUserInput.schema';
import { WalletWhereUniqueInputObjectSchema as WalletWhereUniqueInputObjectSchema } from './WalletWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WalletCreateWithoutUserInputObjectSchema), z.lazy(() => WalletUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WalletCreateOrConnectWithoutUserInputObjectSchema).optional(),
  connect: z.lazy(() => WalletWhereUniqueInputObjectSchema).optional()
}).strict();
export const WalletCreateNestedOneWithoutUserInputObjectSchema: z.ZodType<Prisma.WalletCreateNestedOneWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletCreateNestedOneWithoutUserInput>;
export const WalletCreateNestedOneWithoutUserInputObjectZodSchema = makeSchema();
