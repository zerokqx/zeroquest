import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  planId: z.literal(true).optional(),
  totalGb: z.literal(true).optional()
}).strict();
export const SubscribeSumAggregateInputObjectSchema: z.ZodType<Prisma.SubscribeSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeSumAggregateInputType>;
export const SubscribeSumAggregateInputObjectZodSchema = makeSchema();
