import * as z from 'zod';
import type { Prisma } from '../../client';
import { PlanWhereUniqueInputObjectSchema as PlanWhereUniqueInputObjectSchema } from './PlanWhereUniqueInput.schema';
import { PlanUpdateWithoutInboundInputObjectSchema as PlanUpdateWithoutInboundInputObjectSchema } from './PlanUpdateWithoutInboundInput.schema';
import { PlanUncheckedUpdateWithoutInboundInputObjectSchema as PlanUncheckedUpdateWithoutInboundInputObjectSchema } from './PlanUncheckedUpdateWithoutInboundInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PlanWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PlanUpdateWithoutInboundInputObjectSchema), z.lazy(() => PlanUncheckedUpdateWithoutInboundInputObjectSchema)])
}).strict();
export const PlanUpdateWithWhereUniqueWithoutInboundInputObjectSchema: z.ZodType<Prisma.PlanUpdateWithWhereUniqueWithoutInboundInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanUpdateWithWhereUniqueWithoutInboundInput>;
export const PlanUpdateWithWhereUniqueWithoutInboundInputObjectZodSchema = makeSchema();
