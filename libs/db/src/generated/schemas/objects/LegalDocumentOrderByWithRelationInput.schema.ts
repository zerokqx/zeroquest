import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LegalAcceptancesOrderByRelationAggregateInputObjectSchema as LegalAcceptancesOrderByRelationAggregateInputObjectSchema } from './LegalAcceptancesOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  version: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  legalAcceptances: z.lazy(() => LegalAcceptancesOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const LegalDocumentOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.LegalDocumentOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalDocumentOrderByWithRelationInput>;
export const LegalDocumentOrderByWithRelationInputObjectZodSchema = makeSchema();
