import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  paymentId: z.literal(true).optional()
}).strict();
export const RefundAvgAggregateInputObjectSchema: z.ZodType<Prisma.RefundAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RefundAvgAggregateInputType>;
export const RefundAvgAggregateInputObjectZodSchema = makeSchema();
