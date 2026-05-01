import * as z from 'zod';
import type { Prisma } from '../../client';
import { SubscribeCreateWithoutPlanInputObjectSchema as SubscribeCreateWithoutPlanInputObjectSchema } from './SubscribeCreateWithoutPlanInput.schema';
import { SubscribeUncheckedCreateWithoutPlanInputObjectSchema as SubscribeUncheckedCreateWithoutPlanInputObjectSchema } from './SubscribeUncheckedCreateWithoutPlanInput.schema';
import { SubscribeCreateOrConnectWithoutPlanInputObjectSchema as SubscribeCreateOrConnectWithoutPlanInputObjectSchema } from './SubscribeCreateOrConnectWithoutPlanInput.schema';
import { SubscribeCreateManyPlanInputEnvelopeObjectSchema as SubscribeCreateManyPlanInputEnvelopeObjectSchema } from './SubscribeCreateManyPlanInputEnvelope.schema';
import { SubscribeWhereUniqueInputObjectSchema as SubscribeWhereUniqueInputObjectSchema } from './SubscribeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SubscribeCreateWithoutPlanInputObjectSchema), z.lazy(() => SubscribeCreateWithoutPlanInputObjectSchema).array(), z.lazy(() => SubscribeUncheckedCreateWithoutPlanInputObjectSchema), z.lazy(() => SubscribeUncheckedCreateWithoutPlanInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SubscribeCreateOrConnectWithoutPlanInputObjectSchema), z.lazy(() => SubscribeCreateOrConnectWithoutPlanInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SubscribeCreateManyPlanInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SubscribeWhereUniqueInputObjectSchema), z.lazy(() => SubscribeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SubscribeUncheckedCreateNestedManyWithoutPlanInputObjectSchema: z.ZodType<Prisma.SubscribeUncheckedCreateNestedManyWithoutPlanInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeUncheckedCreateNestedManyWithoutPlanInput>;
export const SubscribeUncheckedCreateNestedManyWithoutPlanInputObjectZodSchema = makeSchema();
