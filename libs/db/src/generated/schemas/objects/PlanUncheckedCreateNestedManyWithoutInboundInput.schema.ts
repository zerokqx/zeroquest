import * as z from 'zod';
import type { Prisma } from '../../client';
import { PlanCreateWithoutInboundInputObjectSchema as PlanCreateWithoutInboundInputObjectSchema } from './PlanCreateWithoutInboundInput.schema';
import { PlanUncheckedCreateWithoutInboundInputObjectSchema as PlanUncheckedCreateWithoutInboundInputObjectSchema } from './PlanUncheckedCreateWithoutInboundInput.schema';
import { PlanCreateOrConnectWithoutInboundInputObjectSchema as PlanCreateOrConnectWithoutInboundInputObjectSchema } from './PlanCreateOrConnectWithoutInboundInput.schema';
import { PlanCreateManyInboundInputEnvelopeObjectSchema as PlanCreateManyInboundInputEnvelopeObjectSchema } from './PlanCreateManyInboundInputEnvelope.schema';
import { PlanWhereUniqueInputObjectSchema as PlanWhereUniqueInputObjectSchema } from './PlanWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PlanCreateWithoutInboundInputObjectSchema), z.lazy(() => PlanCreateWithoutInboundInputObjectSchema).array(), z.lazy(() => PlanUncheckedCreateWithoutInboundInputObjectSchema), z.lazy(() => PlanUncheckedCreateWithoutInboundInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PlanCreateOrConnectWithoutInboundInputObjectSchema), z.lazy(() => PlanCreateOrConnectWithoutInboundInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PlanCreateManyInboundInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PlanWhereUniqueInputObjectSchema), z.lazy(() => PlanWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PlanUncheckedCreateNestedManyWithoutInboundInputObjectSchema: z.ZodType<Prisma.PlanUncheckedCreateNestedManyWithoutInboundInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanUncheckedCreateNestedManyWithoutInboundInput>;
export const PlanUncheckedCreateNestedManyWithoutInboundInputObjectZodSchema = makeSchema();
