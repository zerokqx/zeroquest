import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserUpdateWithoutLegalAcceptancesInputObjectSchema as UserUpdateWithoutLegalAcceptancesInputObjectSchema } from './UserUpdateWithoutLegalAcceptancesInput.schema';
import { UserUncheckedUpdateWithoutLegalAcceptancesInputObjectSchema as UserUncheckedUpdateWithoutLegalAcceptancesInputObjectSchema } from './UserUncheckedUpdateWithoutLegalAcceptancesInput.schema';
import { UserCreateWithoutLegalAcceptancesInputObjectSchema as UserCreateWithoutLegalAcceptancesInputObjectSchema } from './UserCreateWithoutLegalAcceptancesInput.schema';
import { UserUncheckedCreateWithoutLegalAcceptancesInputObjectSchema as UserUncheckedCreateWithoutLegalAcceptancesInputObjectSchema } from './UserUncheckedCreateWithoutLegalAcceptancesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutLegalAcceptancesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutLegalAcceptancesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutLegalAcceptancesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutLegalAcceptancesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutLegalAcceptancesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutLegalAcceptancesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutLegalAcceptancesInput>;
export const UserUpsertWithoutLegalAcceptancesInputObjectZodSchema = makeSchema();
