import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutReviewInputObjectSchema as UserCreateWithoutReviewInputObjectSchema } from './UserCreateWithoutReviewInput.schema';
import { UserUncheckedCreateWithoutReviewInputObjectSchema as UserUncheckedCreateWithoutReviewInputObjectSchema } from './UserUncheckedCreateWithoutReviewInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutReviewInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutReviewInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutReviewInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutReviewInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutReviewInput>;
export const UserCreateOrConnectWithoutReviewInputObjectZodSchema = makeSchema();
