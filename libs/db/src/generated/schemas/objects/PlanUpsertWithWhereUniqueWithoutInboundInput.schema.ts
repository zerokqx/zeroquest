import * as z from 'zod';
import type { Prisma } from '../../client';
import { PlanWhereUniqueInputObjectSchema as PlanWhereUniqueInputObjectSchema } from './PlanWhereUniqueInput.schema';
import { PlanUpdateWithoutInboundInputObjectSchema as PlanUpdateWithoutInboundInputObjectSchema } from './PlanUpdateWithoutInboundInput.schema';
import { PlanUncheckedUpdateWithoutInboundInputObjectSchema as PlanUncheckedUpdateWithoutInboundInputObjectSchema } from './PlanUncheckedUpdateWithoutInboundInput.schema';
import { PlanCreateWithoutInboundInputObjectSchema as PlanCreateWithoutInboundInputObjectSchema } from './PlanCreateWithoutInboundInput.schema';
import { PlanUncheckedCreateWithoutInboundInputObjectSchema as PlanUncheckedCreateWithoutInboundInputObjectSchema } from './PlanUncheckedCreateWithoutInboundInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PlanWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PlanUpdateWithoutInboundInputObjectSchema), z.lazy(() => PlanUncheckedUpdateWithoutInboundInputObjectSchema)]),
  create: z.union([z.lazy(() => PlanCreateWithoutInboundInputObjectSchema), z.lazy(() => PlanUncheckedCreateWithoutInboundInputObjectSchema)])
}).strict();
export const PlanUpsertWithWhereUniqueWithoutInboundInputObjectSchema: z.ZodType<Prisma.PlanUpsertWithWhereUniqueWithoutInboundInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanUpsertWithWhereUniqueWithoutInboundInput>;
export const PlanUpsertWithWhereUniqueWithoutInboundInputObjectZodSchema = makeSchema();
