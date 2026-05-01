import * as z from 'zod';
import type { Prisma } from '../../client';
import { PlanCreateNestedManyWithoutInboundInputObjectSchema as PlanCreateNestedManyWithoutInboundInputObjectSchema } from './PlanCreateNestedManyWithoutInboundInput.schema'

const makeSchema = () => z.object({
  enable: z.boolean().optional(),
  name: z.string(),
  inboundId: z.number().int(),
  plans: z.lazy(() => PlanCreateNestedManyWithoutInboundInputObjectSchema).optional()
}).strict();
export const InboundCreateInputObjectSchema: z.ZodType<Prisma.InboundCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.InboundCreateInput>;
export const InboundCreateInputObjectZodSchema = makeSchema();
