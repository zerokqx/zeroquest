import * as z from 'zod';
import type { Prisma } from '../../client';
import { SubscribeCreateManyPlanInputObjectSchema as SubscribeCreateManyPlanInputObjectSchema } from './SubscribeCreateManyPlanInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SubscribeCreateManyPlanInputObjectSchema), z.lazy(() => SubscribeCreateManyPlanInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SubscribeCreateManyPlanInputEnvelopeObjectSchema: z.ZodType<Prisma.SubscribeCreateManyPlanInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeCreateManyPlanInputEnvelope>;
export const SubscribeCreateManyPlanInputEnvelopeObjectZodSchema = makeSchema();
