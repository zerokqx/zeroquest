import * as z from 'zod';
import type { Prisma } from '../../client';
import { PlanUncheckedCreateNestedManyWithoutInboundInputObjectSchema as PlanUncheckedCreateNestedManyWithoutInboundInputObjectSchema } from './PlanUncheckedCreateNestedManyWithoutInboundInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  enable: z.boolean().optional(),
  name: z.string(),
  inboundId: z.number().int(),
  plans: z.lazy(() => PlanUncheckedCreateNestedManyWithoutInboundInputObjectSchema).optional()
}).strict();
export const InboundUncheckedCreateInputObjectSchema: z.ZodType<Prisma.InboundUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.InboundUncheckedCreateInput>;
export const InboundUncheckedCreateInputObjectZodSchema = makeSchema();
