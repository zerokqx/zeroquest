import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserUpdateWithoutSubscribesInputObjectSchema as UserUpdateWithoutSubscribesInputObjectSchema } from './UserUpdateWithoutSubscribesInput.schema';
import { UserUncheckedUpdateWithoutSubscribesInputObjectSchema as UserUncheckedUpdateWithoutSubscribesInputObjectSchema } from './UserUncheckedUpdateWithoutSubscribesInput.schema';
import { UserCreateWithoutSubscribesInputObjectSchema as UserCreateWithoutSubscribesInputObjectSchema } from './UserCreateWithoutSubscribesInput.schema';
import { UserUncheckedCreateWithoutSubscribesInputObjectSchema as UserUncheckedCreateWithoutSubscribesInputObjectSchema } from './UserUncheckedCreateWithoutSubscribesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutSubscribesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutSubscribesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutSubscribesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSubscribesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutSubscribesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutSubscribesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutSubscribesInput>;
export const UserUpsertWithoutSubscribesInputObjectZodSchema = makeSchema();
