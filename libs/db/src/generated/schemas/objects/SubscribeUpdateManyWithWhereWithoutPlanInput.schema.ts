import * as z from 'zod';
import type { Prisma } from '../../client';
import { SubscribeScalarWhereInputObjectSchema as SubscribeScalarWhereInputObjectSchema } from './SubscribeScalarWhereInput.schema';
import { SubscribeUpdateManyMutationInputObjectSchema as SubscribeUpdateManyMutationInputObjectSchema } from './SubscribeUpdateManyMutationInput.schema';
import { SubscribeUncheckedUpdateManyWithoutPlanInputObjectSchema as SubscribeUncheckedUpdateManyWithoutPlanInputObjectSchema } from './SubscribeUncheckedUpdateManyWithoutPlanInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubscribeScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SubscribeUpdateManyMutationInputObjectSchema), z.lazy(() => SubscribeUncheckedUpdateManyWithoutPlanInputObjectSchema)])
}).strict();
export const SubscribeUpdateManyWithWhereWithoutPlanInputObjectSchema: z.ZodType<Prisma.SubscribeUpdateManyWithWhereWithoutPlanInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeUpdateManyWithWhereWithoutPlanInput>;
export const SubscribeUpdateManyWithWhereWithoutPlanInputObjectZodSchema = makeSchema();
