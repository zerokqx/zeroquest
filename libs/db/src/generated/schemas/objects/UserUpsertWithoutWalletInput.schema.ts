import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserUpdateWithoutWalletInputObjectSchema as UserUpdateWithoutWalletInputObjectSchema } from './UserUpdateWithoutWalletInput.schema';
import { UserUncheckedUpdateWithoutWalletInputObjectSchema as UserUncheckedUpdateWithoutWalletInputObjectSchema } from './UserUncheckedUpdateWithoutWalletInput.schema';
import { UserCreateWithoutWalletInputObjectSchema as UserCreateWithoutWalletInputObjectSchema } from './UserCreateWithoutWalletInput.schema';
import { UserUncheckedCreateWithoutWalletInputObjectSchema as UserUncheckedCreateWithoutWalletInputObjectSchema } from './UserUncheckedCreateWithoutWalletInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutWalletInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutWalletInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutWalletInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWalletInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutWalletInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutWalletInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutWalletInput>;
export const UserUpsertWithoutWalletInputObjectZodSchema = makeSchema();
