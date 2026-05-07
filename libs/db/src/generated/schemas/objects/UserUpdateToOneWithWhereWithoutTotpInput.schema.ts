import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutTotpInputObjectSchema as UserUpdateWithoutTotpInputObjectSchema } from './UserUpdateWithoutTotpInput.schema';
import { UserUncheckedUpdateWithoutTotpInputObjectSchema as UserUncheckedUpdateWithoutTotpInputObjectSchema } from './UserUncheckedUpdateWithoutTotpInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutTotpInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTotpInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutTotpInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTotpInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTotpInput>;
export const UserUpdateToOneWithWhereWithoutTotpInputObjectZodSchema = makeSchema();
