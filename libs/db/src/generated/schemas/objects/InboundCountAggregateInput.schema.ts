import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  enable: z.literal(true).optional(),
  name: z.literal(true).optional(),
  inboundId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const InboundCountAggregateInputObjectSchema: z.ZodType<Prisma.InboundCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.InboundCountAggregateInputType>;
export const InboundCountAggregateInputObjectZodSchema = makeSchema();
