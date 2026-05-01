import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PlanOrderByRelationAggregateInputObjectSchema as PlanOrderByRelationAggregateInputObjectSchema } from './PlanOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  enable: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  inboundId: SortOrderSchema.optional(),
  plans: z.lazy(() => PlanOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const InboundOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.InboundOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.InboundOrderByWithRelationInput>;
export const InboundOrderByWithRelationInputObjectZodSchema = makeSchema();
