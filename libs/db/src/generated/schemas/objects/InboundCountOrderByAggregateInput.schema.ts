import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  enable: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  inboundId: SortOrderSchema.optional()
}).strict();
export const InboundCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.InboundCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InboundCountOrderByAggregateInput>;
export const InboundCountOrderByAggregateInputObjectZodSchema = makeSchema();
