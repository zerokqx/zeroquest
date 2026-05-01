import * as z from 'zod';
import type { Prisma } from '../../client';
import { PlanCreateManyInboundInputObjectSchema as PlanCreateManyInboundInputObjectSchema } from './PlanCreateManyInboundInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PlanCreateManyInboundInputObjectSchema), z.lazy(() => PlanCreateManyInboundInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PlanCreateManyInboundInputEnvelopeObjectSchema: z.ZodType<Prisma.PlanCreateManyInboundInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PlanCreateManyInboundInputEnvelope>;
export const PlanCreateManyInboundInputEnvelopeObjectZodSchema = makeSchema();
