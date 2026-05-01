import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  inboundId: z.literal(true).optional()
}).strict();
export const InboundSumAggregateInputObjectSchema: z.ZodType<Prisma.InboundSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.InboundSumAggregateInputType>;
export const InboundSumAggregateInputObjectZodSchema = makeSchema();
