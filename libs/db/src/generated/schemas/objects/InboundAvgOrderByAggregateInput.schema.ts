import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  inboundId: SortOrderSchema.optional()
}).strict();
export const InboundAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.InboundAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InboundAvgOrderByAggregateInput>;
export const InboundAvgOrderByAggregateInputObjectZodSchema = makeSchema();
