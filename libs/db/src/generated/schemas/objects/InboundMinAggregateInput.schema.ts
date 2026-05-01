import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  enable: z.literal(true).optional(),
  name: z.literal(true).optional(),
  inboundId: z.literal(true).optional()
}).strict();
export const InboundMinAggregateInputObjectSchema: z.ZodType<Prisma.InboundMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.InboundMinAggregateInputType>;
export const InboundMinAggregateInputObjectZodSchema = makeSchema();
