import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ClientTypeMaxAggregateInputObjectSchema: z.ZodType<Prisma.ClientTypeMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ClientTypeMaxAggregateInputType>;
export const ClientTypeMaxAggregateInputObjectZodSchema = makeSchema();
