import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserUpdateWithoutTotpMfaInputObjectSchema as UserUpdateWithoutTotpMfaInputObjectSchema } from './UserUpdateWithoutTotpMfaInput.schema';
import { UserUncheckedUpdateWithoutTotpMfaInputObjectSchema as UserUncheckedUpdateWithoutTotpMfaInputObjectSchema } from './UserUncheckedUpdateWithoutTotpMfaInput.schema';
import { UserCreateWithoutTotpMfaInputObjectSchema as UserCreateWithoutTotpMfaInputObjectSchema } from './UserCreateWithoutTotpMfaInput.schema';
import { UserUncheckedCreateWithoutTotpMfaInputObjectSchema as UserUncheckedCreateWithoutTotpMfaInputObjectSchema } from './UserUncheckedCreateWithoutTotpMfaInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutTotpMfaInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTotpMfaInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutTotpMfaInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTotpMfaInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutTotpMfaInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutTotpMfaInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutTotpMfaInput>;
export const UserUpsertWithoutTotpMfaInputObjectZodSchema = makeSchema();
