import * as z from 'zod';
import type { Prisma } from '../../client';
import { ReviewCreateWithoutUserInputObjectSchema as ReviewCreateWithoutUserInputObjectSchema } from './ReviewCreateWithoutUserInput.schema';
import { ReviewUncheckedCreateWithoutUserInputObjectSchema as ReviewUncheckedCreateWithoutUserInputObjectSchema } from './ReviewUncheckedCreateWithoutUserInput.schema';
import { ReviewCreateOrConnectWithoutUserInputObjectSchema as ReviewCreateOrConnectWithoutUserInputObjectSchema } from './ReviewCreateOrConnectWithoutUserInput.schema';
import { ReviewUpsertWithoutUserInputObjectSchema as ReviewUpsertWithoutUserInputObjectSchema } from './ReviewUpsertWithoutUserInput.schema';
import { ReviewWhereInputObjectSchema as ReviewWhereInputObjectSchema } from './ReviewWhereInput.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateToOneWithWhereWithoutUserInputObjectSchema as ReviewUpdateToOneWithWhereWithoutUserInputObjectSchema } from './ReviewUpdateToOneWithWhereWithoutUserInput.schema';
import { ReviewUpdateWithoutUserInputObjectSchema as ReviewUpdateWithoutUserInputObjectSchema } from './ReviewUpdateWithoutUserInput.schema';
import { ReviewUncheckedUpdateWithoutUserInputObjectSchema as ReviewUncheckedUpdateWithoutUserInputObjectSchema } from './ReviewUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReviewCreateWithoutUserInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReviewCreateOrConnectWithoutUserInputObjectSchema).optional(),
  upsert: z.lazy(() => ReviewUpsertWithoutUserInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ReviewWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ReviewWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ReviewWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ReviewUpdateToOneWithWhereWithoutUserInputObjectSchema), z.lazy(() => ReviewUpdateWithoutUserInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateWithoutUserInputObjectSchema)]).optional()
}).strict();
export const ReviewUncheckedUpdateOneWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.ReviewUncheckedUpdateOneWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUncheckedUpdateOneWithoutUserNestedInput>;
export const ReviewUncheckedUpdateOneWithoutUserNestedInputObjectZodSchema = makeSchema();
