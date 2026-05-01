import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ClientTypeMinAggregateInputObjectSchema: z.ZodType<Prisma.ClientTypeMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ClientTypeMinAggregateInputType>;
export const ClientTypeMinAggregateInputObjectZodSchema = makeSchema();
