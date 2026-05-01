import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  userId: SortOrderSchema.optional(),
  legalDocumentId: SortOrderSchema.optional()
}).strict();
export const LegalAcceptancesCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesCountOrderByAggregateInput>;
export const LegalAcceptancesCountOrderByAggregateInputObjectZodSchema = makeSchema();
