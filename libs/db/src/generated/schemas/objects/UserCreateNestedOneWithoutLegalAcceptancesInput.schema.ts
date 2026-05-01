import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserCreateWithoutLegalAcceptancesInputObjectSchema as UserCreateWithoutLegalAcceptancesInputObjectSchema } from './UserCreateWithoutLegalAcceptancesInput.schema';
import { UserUncheckedCreateWithoutLegalAcceptancesInputObjectSchema as UserUncheckedCreateWithoutLegalAcceptancesInputObjectSchema } from './UserUncheckedCreateWithoutLegalAcceptancesInput.schema';
import { UserCreateOrConnectWithoutLegalAcceptancesInputObjectSchema as UserCreateOrConnectWithoutLegalAcceptancesInputObjectSchema } from './UserCreateOrConnectWithoutLegalAcceptancesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutLegalAcceptancesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutLegalAcceptancesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutLegalAcceptancesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutLegalAcceptancesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutLegalAcceptancesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutLegalAcceptancesInput>;
export const UserCreateNestedOneWithoutLegalAcceptancesInputObjectZodSchema = makeSchema();
