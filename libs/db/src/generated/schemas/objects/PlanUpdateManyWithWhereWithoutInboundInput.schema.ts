import * as z from 'zod';
import type { Prisma } from '../../client';
import { PlanScalarWhereInputObjectSchema as PlanScalarWhereInputObjectSchema } from './PlanScalarWhereInput.schema';
import { PlanUpdateManyMutationInputObjectSchema as PlanUpdateManyMutationInputObjectSchema } from './PlanUpdateManyMutationInput.schema';
import { PlanUncheckedUpdateManyWithoutInboundInputObjectSchema as PlanUncheckedUpdateManyWithoutInboundInputObjectSchema } from './PlanUncheckedUpdateManyWithoutInboundInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PlanScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PlanUpdateManyMutationInputObjectSchema), z.lazy(() => PlanUncheckedUpdateManyWithoutInboundInputObjectSchema)])
}).strict();
export const PlanUpdateManyWithWhereWithoutInboundInputObjectSchema: z.ZodType<Prisma.PlanUpdateManyWithWhereWithoutInboundInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanUpdateManyWithWhereWithoutInboundInput>;
export const PlanUpdateManyWithWhereWithoutInboundInputObjectZodSchema = makeSchema();
