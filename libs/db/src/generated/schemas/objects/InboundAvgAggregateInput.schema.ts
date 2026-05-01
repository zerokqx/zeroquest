import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  inboundId: z.literal(true).optional()
}).strict();
export const InboundAvgAggregateInputObjectSchema: z.ZodType<Prisma.InboundAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.InboundAvgAggregateInputType>;
export const InboundAvgAggregateInputObjectZodSchema = makeSchema();
