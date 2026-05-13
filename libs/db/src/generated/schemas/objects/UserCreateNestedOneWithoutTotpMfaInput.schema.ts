import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserCreateWithoutTotpMfaInputObjectSchema as UserCreateWithoutTotpMfaInputObjectSchema } from './UserCreateWithoutTotpMfaInput.schema';
import { UserUncheckedCreateWithoutTotpMfaInputObjectSchema as UserUncheckedCreateWithoutTotpMfaInputObjectSchema } from './UserUncheckedCreateWithoutTotpMfaInput.schema';
import { UserCreateOrConnectWithoutTotpMfaInputObjectSchema as UserCreateOrConnectWithoutTotpMfaInputObjectSchema } from './UserCreateOrConnectWithoutTotpMfaInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutTotpMfaInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTotpMfaInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTotpMfaInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutTotpMfaInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTotpMfaInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutTotpMfaInput>;
export const UserCreateNestedOneWithoutTotpMfaInputObjectZodSchema = makeSchema();
