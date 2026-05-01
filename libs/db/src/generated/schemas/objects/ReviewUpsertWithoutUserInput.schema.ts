import * as z from 'zod';
import type { Prisma } from '../../client';
import { ReviewUpdateWithoutUserInputObjectSchema as ReviewUpdateWithoutUserInputObjectSchema } from './ReviewUpdateWithoutUserInput.schema';
import { ReviewUncheckedUpdateWithoutUserInputObjectSchema as ReviewUncheckedUpdateWithoutUserInputObjectSchema } from './ReviewUncheckedUpdateWithoutUserInput.schema';
import { ReviewCreateWithoutUserInputObjectSchema as ReviewCreateWithoutUserInputObjectSchema } from './ReviewCreateWithoutUserInput.schema';
import { ReviewUncheckedCreateWithoutUserInputObjectSchema as ReviewUncheckedCreateWithoutUserInputObjectSchema } from './ReviewUncheckedCreateWithoutUserInput.schema';
import { ReviewWhereInputObjectSchema as ReviewWhereInputObjectSchema } from './ReviewWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ReviewUpdateWithoutUserInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => ReviewCreateWithoutUserInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutUserInputObjectSchema)]),
  where: z.lazy(() => ReviewWhereInputObjectSchema).optional()
}).strict();
export const ReviewUpsertWithoutUserInputObjectSchema: z.ZodType<Prisma.ReviewUpsertWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpsertWithoutUserInput>;
export const ReviewUpsertWithoutUserInputObjectZodSchema = makeSchema();
