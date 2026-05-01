import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutSubscribesInputObjectSchema as UserUpdateWithoutSubscribesInputObjectSchema } from './UserUpdateWithoutSubscribesInput.schema';
import { UserUncheckedUpdateWithoutSubscribesInputObjectSchema as UserUncheckedUpdateWithoutSubscribesInputObjectSchema } from './UserUncheckedUpdateWithoutSubscribesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutSubscribesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutSubscribesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutSubscribesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSubscribesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSubscribesInput>;
export const UserUpdateToOneWithWhereWithoutSubscribesInputObjectZodSchema = makeSchema();
