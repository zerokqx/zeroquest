import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserCreateWithoutTotpInputObjectSchema as UserCreateWithoutTotpInputObjectSchema } from './UserCreateWithoutTotpInput.schema';
import { UserUncheckedCreateWithoutTotpInputObjectSchema as UserUncheckedCreateWithoutTotpInputObjectSchema } from './UserUncheckedCreateWithoutTotpInput.schema';
import { UserCreateOrConnectWithoutTotpInputObjectSchema as UserCreateOrConnectWithoutTotpInputObjectSchema } from './UserCreateOrConnectWithoutTotpInput.schema';
import { UserUpsertWithoutTotpInputObjectSchema as UserUpsertWithoutTotpInputObjectSchema } from './UserUpsertWithoutTotpInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutTotpInputObjectSchema as UserUpdateToOneWithWhereWithoutTotpInputObjectSchema } from './UserUpdateToOneWithWhereWithoutTotpInput.schema';
import { UserUpdateWithoutTotpInputObjectSchema as UserUpdateWithoutTotpInputObjectSchema } from './UserUpdateWithoutTotpInput.schema';
import { UserUncheckedUpdateWithoutTotpInputObjectSchema as UserUncheckedUpdateWithoutTotpInputObjectSchema } from './UserUncheckedUpdateWithoutTotpInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutTotpInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTotpInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTotpInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutTotpInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutTotpInputObjectSchema), z.lazy(() => UserUpdateWithoutTotpInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTotpInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutTotpNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTotpNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutTotpNestedInput>;
export const UserUpdateOneRequiredWithoutTotpNestedInputObjectZodSchema = makeSchema();
