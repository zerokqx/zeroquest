import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserCreateWithoutTotpMfaInputObjectSchema as UserCreateWithoutTotpMfaInputObjectSchema } from './UserCreateWithoutTotpMfaInput.schema';
import { UserUncheckedCreateWithoutTotpMfaInputObjectSchema as UserUncheckedCreateWithoutTotpMfaInputObjectSchema } from './UserUncheckedCreateWithoutTotpMfaInput.schema';
import { UserCreateOrConnectWithoutTotpMfaInputObjectSchema as UserCreateOrConnectWithoutTotpMfaInputObjectSchema } from './UserCreateOrConnectWithoutTotpMfaInput.schema';
import { UserUpsertWithoutTotpMfaInputObjectSchema as UserUpsertWithoutTotpMfaInputObjectSchema } from './UserUpsertWithoutTotpMfaInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutTotpMfaInputObjectSchema as UserUpdateToOneWithWhereWithoutTotpMfaInputObjectSchema } from './UserUpdateToOneWithWhereWithoutTotpMfaInput.schema';
import { UserUpdateWithoutTotpMfaInputObjectSchema as UserUpdateWithoutTotpMfaInputObjectSchema } from './UserUpdateWithoutTotpMfaInput.schema';
import { UserUncheckedUpdateWithoutTotpMfaInputObjectSchema as UserUncheckedUpdateWithoutTotpMfaInputObjectSchema } from './UserUncheckedUpdateWithoutTotpMfaInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutTotpMfaInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTotpMfaInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTotpMfaInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutTotpMfaInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutTotpMfaInputObjectSchema), z.lazy(() => UserUpdateWithoutTotpMfaInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTotpMfaInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutTotpMfaNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTotpMfaNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutTotpMfaNestedInput>;
export const UserUpdateOneRequiredWithoutTotpMfaNestedInputObjectZodSchema = makeSchema();
