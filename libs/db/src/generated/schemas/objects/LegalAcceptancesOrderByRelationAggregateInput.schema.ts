import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const LegalAcceptancesOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesOrderByRelationAggregateInput>;
export const LegalAcceptancesOrderByRelationAggregateInputObjectZodSchema = makeSchema();
