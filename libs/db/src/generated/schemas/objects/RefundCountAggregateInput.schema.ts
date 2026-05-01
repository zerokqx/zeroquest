import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  status: z.literal(true).optional(),
  paymentId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const RefundCountAggregateInputObjectSchema: z.ZodType<Prisma.RefundCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RefundCountAggregateInputType>;
export const RefundCountAggregateInputObjectZodSchema = makeSchema();
