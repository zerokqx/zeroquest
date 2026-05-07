import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserCreateWithoutTotpInputObjectSchema as UserCreateWithoutTotpInputObjectSchema } from './UserCreateWithoutTotpInput.schema';
import { UserUncheckedCreateWithoutTotpInputObjectSchema as UserUncheckedCreateWithoutTotpInputObjectSchema } from './UserUncheckedCreateWithoutTotpInput.schema';
import { UserCreateOrConnectWithoutTotpInputObjectSchema as UserCreateOrConnectWithoutTotpInputObjectSchema } from './UserCreateOrConnectWithoutTotpInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutTotpInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTotpInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTotpInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutTotpInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTotpInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutTotpInput>;
export const UserCreateNestedOneWithoutTotpInputObjectZodSchema = makeSchema();
