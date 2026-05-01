import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  userId: SortOrderSchema.optional(),
  legalDocumentId: SortOrderSchema.optional()
}).strict();
export const LegalAcceptancesMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesMinOrderByAggregateInput>;
export const LegalAcceptancesMinOrderByAggregateInputObjectZodSchema = makeSchema();
