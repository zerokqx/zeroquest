import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  legalDocumentId: SortOrderSchema.optional()
}).strict();
export const LegalAcceptancesAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesAvgOrderByAggregateInput>;
export const LegalAcceptancesAvgOrderByAggregateInputObjectZodSchema = makeSchema();
