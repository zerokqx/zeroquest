import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutTotpMfaInputObjectSchema as UserCreateWithoutTotpMfaInputObjectSchema } from './UserCreateWithoutTotpMfaInput.schema';
import { UserUncheckedCreateWithoutTotpMfaInputObjectSchema as UserUncheckedCreateWithoutTotpMfaInputObjectSchema } from './UserUncheckedCreateWithoutTotpMfaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutTotpMfaInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTotpMfaInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutTotpMfaInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTotpMfaInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutTotpMfaInput>;
export const UserCreateOrConnectWithoutTotpMfaInputObjectZodSchema = makeSchema();
