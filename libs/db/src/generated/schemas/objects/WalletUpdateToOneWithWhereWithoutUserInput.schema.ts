import * as z from 'zod';
import type { Prisma } from '../../client';
import { WalletWhereInputObjectSchema as WalletWhereInputObjectSchema } from './WalletWhereInput.schema';
import { WalletUpdateWithoutUserInputObjectSchema as WalletUpdateWithoutUserInputObjectSchema } from './WalletUpdateWithoutUserInput.schema';
import { WalletUncheckedUpdateWithoutUserInputObjectSchema as WalletUncheckedUpdateWithoutUserInputObjectSchema } from './WalletUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WalletWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => WalletUpdateWithoutUserInputObjectSchema), z.lazy(() => WalletUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const WalletUpdateToOneWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.WalletUpdateToOneWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletUpdateToOneWithWhereWithoutUserInput>;
export const WalletUpdateToOneWithWhereWithoutUserInputObjectZodSchema = makeSchema();
