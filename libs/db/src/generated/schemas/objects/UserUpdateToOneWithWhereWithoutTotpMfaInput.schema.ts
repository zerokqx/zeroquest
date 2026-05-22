import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutTotpMfaInputObjectSchema as UserUpdateWithoutTotpMfaInputObjectSchema } from './UserUpdateWithoutTotpMfaInput.schema';
import { UserUncheckedUpdateWithoutTotpMfaInputObjectSchema as UserUncheckedUpdateWithoutTotpMfaInputObjectSchema } from './UserUncheckedUpdateWithoutTotpMfaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutTotpMfaInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTotpMfaInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutTotpMfaInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTotpMfaInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTotpMfaInput>;
export const UserUpdateToOneWithWhereWithoutTotpMfaInputObjectZodSchema = makeSchema();
