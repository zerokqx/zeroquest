import * as z from 'zod';
import type { Prisma } from '../../client';
import { SubscribeWhereUniqueInputObjectSchema as SubscribeWhereUniqueInputObjectSchema } from './SubscribeWhereUniqueInput.schema';
import { SubscribeUpdateWithoutUserInputObjectSchema as SubscribeUpdateWithoutUserInputObjectSchema } from './SubscribeUpdateWithoutUserInput.schema';
import { SubscribeUncheckedUpdateWithoutUserInputObjectSchema as SubscribeUncheckedUpdateWithoutUserInputObjectSchema } from './SubscribeUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubscribeWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SubscribeUpdateWithoutUserInputObjectSchema), z.lazy(() => SubscribeUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const SubscribeUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.SubscribeUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeUpdateWithWhereUniqueWithoutUserInput>;
export const SubscribeUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
