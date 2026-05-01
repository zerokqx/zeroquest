import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  status: z.literal(true).optional(),
  paymentId: z.literal(true).optional()
}).strict();
export const RefundMinAggregateInputObjectSchema: z.ZodType<Prisma.RefundMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RefundMinAggregateInputType>;
export const RefundMinAggregateInputObjectZodSchema = makeSchema();
