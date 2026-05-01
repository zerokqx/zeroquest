import * as z from 'zod';
import type { Prisma } from '../../client';
import { PlanWhereUniqueInputObjectSchema as PlanWhereUniqueInputObjectSchema } from './PlanWhereUniqueInput.schema';
import { PlanCreateWithoutInboundInputObjectSchema as PlanCreateWithoutInboundInputObjectSchema } from './PlanCreateWithoutInboundInput.schema';
import { PlanUncheckedCreateWithoutInboundInputObjectSchema as PlanUncheckedCreateWithoutInboundInputObjectSchema } from './PlanUncheckedCreateWithoutInboundInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PlanWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PlanCreateWithoutInboundInputObjectSchema), z.lazy(() => PlanUncheckedCreateWithoutInboundInputObjectSchema)])
}).strict();
export const PlanCreateOrConnectWithoutInboundInputObjectSchema: z.ZodType<Prisma.PlanCreateOrConnectWithoutInboundInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanCreateOrConnectWithoutInboundInput>;
export const PlanCreateOrConnectWithoutInboundInputObjectZodSchema = makeSchema();
