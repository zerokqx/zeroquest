import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SessionOrderByRelationAggregateInputObjectSchema as SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ClientTypeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ClientTypeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientTypeOrderByWithRelationInput>;
export const ClientTypeOrderByWithRelationInputObjectZodSchema = makeSchema();
