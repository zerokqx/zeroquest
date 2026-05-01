import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserCreateWithoutSubscribesInputObjectSchema as UserCreateWithoutSubscribesInputObjectSchema } from './UserCreateWithoutSubscribesInput.schema';
import { UserUncheckedCreateWithoutSubscribesInputObjectSchema as UserUncheckedCreateWithoutSubscribesInputObjectSchema } from './UserUncheckedCreateWithoutSubscribesInput.schema';
import { UserCreateOrConnectWithoutSubscribesInputObjectSchema as UserCreateOrConnectWithoutSubscribesInputObjectSchema } from './UserCreateOrConnectWithoutSubscribesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutSubscribesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSubscribesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSubscribesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutSubscribesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSubscribesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutSubscribesInput>;
export const UserCreateNestedOneWithoutSubscribesInputObjectZodSchema = makeSchema();
