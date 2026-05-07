import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutTotpInputObjectSchema as UserCreateWithoutTotpInputObjectSchema } from './UserCreateWithoutTotpInput.schema';
import { UserUncheckedCreateWithoutTotpInputObjectSchema as UserUncheckedCreateWithoutTotpInputObjectSchema } from './UserUncheckedCreateWithoutTotpInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutTotpInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTotpInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutTotpInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTotpInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutTotpInput>;
export const UserCreateOrConnectWithoutTotpInputObjectZodSchema = makeSchema();
