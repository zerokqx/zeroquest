import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  planId: z.literal(true).optional(),
  totalGb: z.literal(true).optional()
}).strict();
export const SubscribeAvgAggregateInputObjectSchema: z.ZodType<Prisma.SubscribeAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeAvgAggregateInputType>;
export const SubscribeAvgAggregateInputObjectZodSchema = makeSchema();
