import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutSubscribesInputObjectSchema as UserCreateWithoutSubscribesInputObjectSchema } from './UserCreateWithoutSubscribesInput.schema';
import { UserUncheckedCreateWithoutSubscribesInputObjectSchema as UserUncheckedCreateWithoutSubscribesInputObjectSchema } from './UserUncheckedCreateWithoutSubscribesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutSubscribesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSubscribesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutSubscribesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSubscribesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutSubscribesInput>;
export const UserCreateOrConnectWithoutSubscribesInputObjectZodSchema = makeSchema();
