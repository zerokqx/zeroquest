import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const ClientTypeSumAggregateInputObjectSchema: z.ZodType<Prisma.ClientTypeSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ClientTypeSumAggregateInputType>;
export const ClientTypeSumAggregateInputObjectZodSchema = makeSchema();
