import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  value: z.literal(true).optional(),
  planId: z.literal(true).optional()
}).strict();
export const PaymentSumAggregateInputObjectSchema: z.ZodType<Prisma.PaymentSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PaymentSumAggregateInputType>;
export const PaymentSumAggregateInputObjectZodSchema = makeSchema();
