import * as z from 'zod';
import type { Prisma } from '../../client';
import { SubscribeWhereUniqueInputObjectSchema as SubscribeWhereUniqueInputObjectSchema } from './SubscribeWhereUniqueInput.schema';
import { SubscribeUpdateWithoutPlanInputObjectSchema as SubscribeUpdateWithoutPlanInputObjectSchema } from './SubscribeUpdateWithoutPlanInput.schema';
import { SubscribeUncheckedUpdateWithoutPlanInputObjectSchema as SubscribeUncheckedUpdateWithoutPlanInputObjectSchema } from './SubscribeUncheckedUpdateWithoutPlanInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubscribeWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SubscribeUpdateWithoutPlanInputObjectSchema), z.lazy(() => SubscribeUncheckedUpdateWithoutPlanInputObjectSchema)])
}).strict();
export const SubscribeUpdateWithWhereUniqueWithoutPlanInputObjectSchema: z.ZodType<Prisma.SubscribeUpdateWithWhereUniqueWithoutPlanInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeUpdateWithWhereUniqueWithoutPlanInput>;
export const SubscribeUpdateWithWhereUniqueWithoutPlanInputObjectZodSchema = makeSchema();
