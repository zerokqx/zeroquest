import * as z from 'zod';
import type { Prisma } from '../../client';
import { SubscribeWhereUniqueInputObjectSchema as SubscribeWhereUniqueInputObjectSchema } from './SubscribeWhereUniqueInput.schema';
import { SubscribeUpdateWithoutPlanInputObjectSchema as SubscribeUpdateWithoutPlanInputObjectSchema } from './SubscribeUpdateWithoutPlanInput.schema';
import { SubscribeUncheckedUpdateWithoutPlanInputObjectSchema as SubscribeUncheckedUpdateWithoutPlanInputObjectSchema } from './SubscribeUncheckedUpdateWithoutPlanInput.schema';
import { SubscribeCreateWithoutPlanInputObjectSchema as SubscribeCreateWithoutPlanInputObjectSchema } from './SubscribeCreateWithoutPlanInput.schema';
import { SubscribeUncheckedCreateWithoutPlanInputObjectSchema as SubscribeUncheckedCreateWithoutPlanInputObjectSchema } from './SubscribeUncheckedCreateWithoutPlanInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubscribeWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SubscribeUpdateWithoutPlanInputObjectSchema), z.lazy(() => SubscribeUncheckedUpdateWithoutPlanInputObjectSchema)]),
  create: z.union([z.lazy(() => SubscribeCreateWithoutPlanInputObjectSchema), z.lazy(() => SubscribeUncheckedCreateWithoutPlanInputObjectSchema)])
}).strict();
export const SubscribeUpsertWithWhereUniqueWithoutPlanInputObjectSchema: z.ZodType<Prisma.SubscribeUpsertWithWhereUniqueWithoutPlanInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeUpsertWithWhereUniqueWithoutPlanInput>;
export const SubscribeUpsertWithWhereUniqueWithoutPlanInputObjectZodSchema = makeSchema();
