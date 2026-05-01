import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserUpdateWithoutReviewInputObjectSchema as UserUpdateWithoutReviewInputObjectSchema } from './UserUpdateWithoutReviewInput.schema';
import { UserUncheckedUpdateWithoutReviewInputObjectSchema as UserUncheckedUpdateWithoutReviewInputObjectSchema } from './UserUncheckedUpdateWithoutReviewInput.schema';
import { UserCreateWithoutReviewInputObjectSchema as UserCreateWithoutReviewInputObjectSchema } from './UserCreateWithoutReviewInput.schema';
import { UserUncheckedCreateWithoutReviewInputObjectSchema as UserUncheckedCreateWithoutReviewInputObjectSchema } from './UserUncheckedCreateWithoutReviewInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutReviewInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutReviewInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutReviewInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutReviewInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutReviewInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutReviewInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutReviewInput>;
export const UserUpsertWithoutReviewInputObjectZodSchema = makeSchema();
