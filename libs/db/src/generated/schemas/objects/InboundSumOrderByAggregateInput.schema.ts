import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  inboundId: SortOrderSchema.optional()
}).strict();
export const InboundSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.InboundSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InboundSumOrderByAggregateInput>;
export const InboundSumOrderByAggregateInputObjectZodSchema = makeSchema();
