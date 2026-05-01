import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutWalletInputObjectSchema as UserCreateWithoutWalletInputObjectSchema } from './UserCreateWithoutWalletInput.schema';
import { UserUncheckedCreateWithoutWalletInputObjectSchema as UserUncheckedCreateWithoutWalletInputObjectSchema } from './UserUncheckedCreateWithoutWalletInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutWalletInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWalletInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutWalletInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutWalletInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutWalletInput>;
export const UserCreateOrConnectWithoutWalletInputObjectZodSchema = makeSchema();
