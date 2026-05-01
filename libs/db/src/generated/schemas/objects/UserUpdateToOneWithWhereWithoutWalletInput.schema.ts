import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutWalletInputObjectSchema as UserUpdateWithoutWalletInputObjectSchema } from './UserUpdateWithoutWalletInput.schema';
import { UserUncheckedUpdateWithoutWalletInputObjectSchema as UserUncheckedUpdateWithoutWalletInputObjectSchema } from './UserUncheckedUpdateWithoutWalletInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutWalletInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutWalletInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutWalletInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutWalletInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutWalletInput>;
export const UserUpdateToOneWithWhereWithoutWalletInputObjectZodSchema = makeSchema();
