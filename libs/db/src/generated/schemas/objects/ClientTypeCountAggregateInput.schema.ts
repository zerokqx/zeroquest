import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ClientTypeCountAggregateInputObjectSchema: z.ZodType<Prisma.ClientTypeCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ClientTypeCountAggregateInputType>;
export const ClientTypeCountAggregateInputObjectZodSchema = makeSchema();
