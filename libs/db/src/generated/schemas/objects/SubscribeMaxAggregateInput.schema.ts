import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  vlessLink: z.literal(true).optional(),
  vlessClientId: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  email: z.literal(true).optional(),
  nextPaymentDate: z.literal(true).optional(),
  status: z.literal(true).optional(),
  expiresAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  planId: z.literal(true).optional(),
  totalGb: z.literal(true).optional()
}).strict();
export const SubscribeMaxAggregateInputObjectSchema: z.ZodType<Prisma.SubscribeMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeMaxAggregateInputType>;
export const SubscribeMaxAggregateInputObjectZodSchema = makeSchema();
