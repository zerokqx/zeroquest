import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutLegalAcceptancesInputObjectSchema as UserUpdateWithoutLegalAcceptancesInputObjectSchema } from './UserUpdateWithoutLegalAcceptancesInput.schema';
import { UserUncheckedUpdateWithoutLegalAcceptancesInputObjectSchema as UserUncheckedUpdateWithoutLegalAcceptancesInputObjectSchema } from './UserUncheckedUpdateWithoutLegalAcceptancesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutLegalAcceptancesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutLegalAcceptancesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutLegalAcceptancesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutLegalAcceptancesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutLegalAcceptancesInput>;
export const UserUpdateToOneWithWhereWithoutLegalAcceptancesInputObjectZodSchema = makeSchema();
