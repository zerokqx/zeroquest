import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserUpdateWithoutTotpInputObjectSchema as UserUpdateWithoutTotpInputObjectSchema } from './UserUpdateWithoutTotpInput.schema';
import { UserUncheckedUpdateWithoutTotpInputObjectSchema as UserUncheckedUpdateWithoutTotpInputObjectSchema } from './UserUncheckedUpdateWithoutTotpInput.schema';
import { UserCreateWithoutTotpInputObjectSchema as UserCreateWithoutTotpInputObjectSchema } from './UserCreateWithoutTotpInput.schema';
import { UserUncheckedCreateWithoutTotpInputObjectSchema as UserUncheckedCreateWithoutTotpInputObjectSchema } from './UserUncheckedCreateWithoutTotpInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutTotpInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTotpInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutTotpInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTotpInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutTotpInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutTotpInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutTotpInput>;
export const UserUpsertWithoutTotpInputObjectZodSchema = makeSchema();
