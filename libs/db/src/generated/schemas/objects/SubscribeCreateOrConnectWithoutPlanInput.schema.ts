import * as z from 'zod';
import type { Prisma } from '../../client';
import { SubscribeWhereUniqueInputObjectSchema as SubscribeWhereUniqueInputObjectSchema } from './SubscribeWhereUniqueInput.schema';
import { SubscribeCreateWithoutPlanInputObjectSchema as SubscribeCreateWithoutPlanInputObjectSchema } from './SubscribeCreateWithoutPlanInput.schema';
import { SubscribeUncheckedCreateWithoutPlanInputObjectSchema as SubscribeUncheckedCreateWithoutPlanInputObjectSchema } from './SubscribeUncheckedCreateWithoutPlanInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubscribeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SubscribeCreateWithoutPlanInputObjectSchema), z.lazy(() => SubscribeUncheckedCreateWithoutPlanInputObjectSchema)])
}).strict();
export const SubscribeCreateOrConnectWithoutPlanInputObjectSchema: z.ZodType<Prisma.SubscribeCreateOrConnectWithoutPlanInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeCreateOrConnectWithoutPlanInput>;
export const SubscribeCreateOrConnectWithoutPlanInputObjectZodSchema = makeSchema();
