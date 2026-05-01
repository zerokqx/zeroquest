import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const PlanOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.PlanOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanOrderByRelationAggregateInput>;
export const PlanOrderByRelationAggregateInputObjectZodSchema = makeSchema();
