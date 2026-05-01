import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  userId: SortOrderSchema.optional(),
  legalDocumentId: SortOrderSchema.optional()
}).strict();
export const LegalAcceptancesMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesMaxOrderByAggregateInput>;
export const LegalAcceptancesMaxOrderByAggregateInputObjectZodSchema = makeSchema();
