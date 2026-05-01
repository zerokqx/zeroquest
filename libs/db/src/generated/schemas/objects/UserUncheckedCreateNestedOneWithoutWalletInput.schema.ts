import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserCreateWithoutWalletInputObjectSchema as UserCreateWithoutWalletInputObjectSchema } from './UserCreateWithoutWalletInput.schema';
import { UserUncheckedCreateWithoutWalletInputObjectSchema as UserUncheckedCreateWithoutWalletInputObjectSchema } from './UserUncheckedCreateWithoutWalletInput.schema';
import { UserCreateOrConnectWithoutWalletInputObjectSchema as UserCreateOrConnectWithoutWalletInputObjectSchema } from './UserCreateOrConnectWithoutWalletInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutWalletInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWalletInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWalletInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateNestedOneWithoutWalletInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateNestedOneWithoutWalletInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateNestedOneWithoutWalletInput>;
export const UserUncheckedCreateNestedOneWithoutWalletInputObjectZodSchema = makeSchema();
