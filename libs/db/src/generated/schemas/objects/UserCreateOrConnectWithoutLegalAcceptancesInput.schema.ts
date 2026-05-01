import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutLegalAcceptancesInputObjectSchema as UserCreateWithoutLegalAcceptancesInputObjectSchema } from './UserCreateWithoutLegalAcceptancesInput.schema';
import { UserUncheckedCreateWithoutLegalAcceptancesInputObjectSchema as UserUncheckedCreateWithoutLegalAcceptancesInputObjectSchema } from './UserUncheckedCreateWithoutLegalAcceptancesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutLegalAcceptancesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutLegalAcceptancesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutLegalAcceptancesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutLegalAcceptancesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutLegalAcceptancesInput>;
export const UserCreateOrConnectWithoutLegalAcceptancesInputObjectZodSchema = makeSchema();
