import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserCreateWithoutSubscribesInputObjectSchema as UserCreateWithoutSubscribesInputObjectSchema } from './UserCreateWithoutSubscribesInput.schema';
import { UserUncheckedCreateWithoutSubscribesInputObjectSchema as UserUncheckedCreateWithoutSubscribesInputObjectSchema } from './UserUncheckedCreateWithoutSubscribesInput.schema';
import { UserCreateOrConnectWithoutSubscribesInputObjectSchema as UserCreateOrConnectWithoutSubscribesInputObjectSchema } from './UserCreateOrConnectWithoutSubscribesInput.schema';
import { UserUpsertWithoutSubscribesInputObjectSchema as UserUpsertWithoutSubscribesInputObjectSchema } from './UserUpsertWithoutSubscribesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutSubscribesInputObjectSchema as UserUpdateToOneWithWhereWithoutSubscribesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutSubscribesInput.schema';
import { UserUpdateWithoutSubscribesInputObjectSchema as UserUpdateWithoutSubscribesInputObjectSchema } from './UserUpdateWithoutSubscribesInput.schema';
import { UserUncheckedUpdateWithoutSubscribesInputObjectSchema as UserUncheckedUpdateWithoutSubscribesInputObjectSchema } from './UserUncheckedUpdateWithoutSubscribesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutSubscribesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSubscribesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSubscribesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSubscribesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutSubscribesInputObjectSchema), z.lazy(() => UserUpdateWithoutSubscribesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutSubscribesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutSubscribesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSubscribesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutSubscribesNestedInput>;
export const UserUpdateOneRequiredWithoutSubscribesNestedInputObjectZodSchema = makeSchema();
