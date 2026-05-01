import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const ClientTypeSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ClientTypeSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientTypeSumOrderByAggregateInput>;
export const ClientTypeSumOrderByAggregateInputObjectZodSchema = makeSchema();
