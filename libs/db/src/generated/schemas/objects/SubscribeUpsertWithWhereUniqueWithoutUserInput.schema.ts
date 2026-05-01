import * as z from 'zod';
import type { Prisma } from '../../client';
import { SubscribeWhereUniqueInputObjectSchema as SubscribeWhereUniqueInputObjectSchema } from './SubscribeWhereUniqueInput.schema';
import { SubscribeUpdateWithoutUserInputObjectSchema as SubscribeUpdateWithoutUserInputObjectSchema } from './SubscribeUpdateWithoutUserInput.schema';
import { SubscribeUncheckedUpdateWithoutUserInputObjectSchema as SubscribeUncheckedUpdateWithoutUserInputObjectSchema } from './SubscribeUncheckedUpdateWithoutUserInput.schema';
import { SubscribeCreateWithoutUserInputObjectSchema as SubscribeCreateWithoutUserInputObjectSchema } from './SubscribeCreateWithoutUserInput.schema';
import { SubscribeUncheckedCreateWithoutUserInputObjectSchema as SubscribeUncheckedCreateWithoutUserInputObjectSchema } from './SubscribeUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubscribeWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SubscribeUpdateWithoutUserInputObjectSchema), z.lazy(() => SubscribeUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => SubscribeCreateWithoutUserInputObjectSchema), z.lazy(() => SubscribeUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const SubscribeUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.SubscribeUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeUpsertWithWhereUniqueWithoutUserInput>;
export const SubscribeUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
