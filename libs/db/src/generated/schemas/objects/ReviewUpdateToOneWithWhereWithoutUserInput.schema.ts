import * as z from 'zod';
import type { Prisma } from '../../client';
import { ReviewWhereInputObjectSchema as ReviewWhereInputObjectSchema } from './ReviewWhereInput.schema';
import { ReviewUpdateWithoutUserInputObjectSchema as ReviewUpdateWithoutUserInputObjectSchema } from './ReviewUpdateWithoutUserInput.schema';
import { ReviewUncheckedUpdateWithoutUserInputObjectSchema as ReviewUncheckedUpdateWithoutUserInputObjectSchema } from './ReviewUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ReviewUpdateWithoutUserInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const ReviewUpdateToOneWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.ReviewUpdateToOneWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateToOneWithWhereWithoutUserInput>;
export const ReviewUpdateToOneWithWhereWithoutUserInputObjectZodSchema = makeSchema();
