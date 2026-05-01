import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const SubscribeOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.SubscribeOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeOrderByRelationAggregateInput>;
export const SubscribeOrderByRelationAggregateInputObjectZodSchema = makeSchema();
