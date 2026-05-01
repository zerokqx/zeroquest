import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  enable: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  inboundId: SortOrderSchema.optional()
}).strict();
export const InboundMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.InboundMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InboundMinOrderByAggregateInput>;
export const InboundMinOrderByAggregateInputObjectZodSchema = makeSchema();
