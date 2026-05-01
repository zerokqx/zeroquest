import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const ClientTypeAvgAggregateInputObjectSchema: z.ZodType<Prisma.ClientTypeAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ClientTypeAvgAggregateInputType>;
export const ClientTypeAvgAggregateInputObjectZodSchema = makeSchema();
