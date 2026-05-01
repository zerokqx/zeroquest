import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserCreateWithoutLegalAcceptancesInputObjectSchema as UserCreateWithoutLegalAcceptancesInputObjectSchema } from './UserCreateWithoutLegalAcceptancesInput.schema';
import { UserUncheckedCreateWithoutLegalAcceptancesInputObjectSchema as UserUncheckedCreateWithoutLegalAcceptancesInputObjectSchema } from './UserUncheckedCreateWithoutLegalAcceptancesInput.schema';
import { UserCreateOrConnectWithoutLegalAcceptancesInputObjectSchema as UserCreateOrConnectWithoutLegalAcceptancesInputObjectSchema } from './UserCreateOrConnectWithoutLegalAcceptancesInput.schema';
import { UserUpsertWithoutLegalAcceptancesInputObjectSchema as UserUpsertWithoutLegalAcceptancesInputObjectSchema } from './UserUpsertWithoutLegalAcceptancesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutLegalAcceptancesInputObjectSchema as UserUpdateToOneWithWhereWithoutLegalAcceptancesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutLegalAcceptancesInput.schema';
import { UserUpdateWithoutLegalAcceptancesInputObjectSchema as UserUpdateWithoutLegalAcceptancesInputObjectSchema } from './UserUpdateWithoutLegalAcceptancesInput.schema';
import { UserUncheckedUpdateWithoutLegalAcceptancesInputObjectSchema as UserUncheckedUpdateWithoutLegalAcceptancesInputObjectSchema } from './UserUncheckedUpdateWithoutLegalAcceptancesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutLegalAcceptancesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutLegalAcceptancesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutLegalAcceptancesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutLegalAcceptancesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutLegalAcceptancesInputObjectSchema), z.lazy(() => UserUpdateWithoutLegalAcceptancesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutLegalAcceptancesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutLegalAcceptancesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutLegalAcceptancesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutLegalAcceptancesNestedInput>;
export const UserUpdateOneRequiredWithoutLegalAcceptancesNestedInputObjectZodSchema = makeSchema();
