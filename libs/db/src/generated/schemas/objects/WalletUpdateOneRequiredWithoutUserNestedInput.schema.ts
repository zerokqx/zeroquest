import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletCreateWithoutUserInputObjectSchema as WalletCreateWithoutUserInputObjectSchema } from './WalletCreateWithoutUserInput.schema';
import { WalletUncheckedCreateWithoutUserInputObjectSchema as WalletUncheckedCreateWithoutUserInputObjectSchema } from './WalletUncheckedCreateWithoutUserInput.schema';
import { WalletCreateOrConnectWithoutUserInputObjectSchema as WalletCreateOrConnectWithoutUserInputObjectSchema } from './WalletCreateOrConnectWithoutUserInput.schema';
import { WalletUpsertWithoutUserInputObjectSchema as WalletUpsertWithoutUserInputObjectSchema } from './WalletUpsertWithoutUserInput.schema';
import { WalletWhereUniqueInputObjectSchema as WalletWhereUniqueInputObjectSchema } from './WalletWhereUniqueInput.schema';
import { WalletUpdateToOneWithWhereWithoutUserInputObjectSchema as WalletUpdateToOneWithWhereWithoutUserInputObjectSchema } from './WalletUpdateToOneWithWhereWithoutUserInput.schema';
import { WalletUpdateWithoutUserInputObjectSchema as WalletUpdateWithoutUserInputObjectSchema } from './WalletUpdateWithoutUserInput.schema';
import { WalletUncheckedUpdateWithoutUserInputObjectSchema as WalletUncheckedUpdateWithoutUserInputObjectSchema } from './WalletUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WalletCreateWithoutUserInputObjectSchema), z.lazy(() => WalletUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WalletCreateOrConnectWithoutUserInputObjectSchema).optional(),
  upsert: z.lazy(() => WalletUpsertWithoutUserInputObjectSchema).optional(),
  connect: z.lazy(() => WalletWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => WalletUpdateToOneWithWhereWithoutUserInputObjectSchema), z.lazy(() => WalletUpdateWithoutUserInputObjectSchema), z.lazy(() => WalletUncheckedUpdateWithoutUserInputObjectSchema)]).optional()
}).strict();
export const WalletUpdateOneRequiredWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.WalletUpdateOneRequiredWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletUpdateOneRequiredWithoutUserNestedInput>;
export const WalletUpdateOneRequiredWithoutUserNestedInputObjectZodSchema = makeSchema();
