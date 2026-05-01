import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  enable: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  inboundId: SortOrderSchema.optional()
}).strict();
export const InboundMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.InboundMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.InboundMaxOrderByAggregateInput>;
export const InboundMaxOrderByAggregateInputObjectZodSchema = makeSchema();
