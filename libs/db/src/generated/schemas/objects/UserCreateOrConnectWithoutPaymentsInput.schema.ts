import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPaymentsInputObjectSchema as UserCreateWithoutPaymentsInputObjectSchema } from './UserCreateWithoutPaymentsInput.schema';
import { UserUncheckedCreateWithoutPaymentsInputObjectSchema as UserUncheckedCreateWithoutPaymentsInputObjectSchema } from './UserUncheckedCreateWithoutPaymentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutPaymentsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPaymentsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutPaymentsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPaymentsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutPaymentsInput>;
export const UserCreateOrConnectWithoutPaymentsInputObjectZodSchema = makeSchema();
