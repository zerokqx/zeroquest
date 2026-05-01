import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  legalDocumentId: SortOrderSchema.optional()
}).strict();
export const LegalAcceptancesSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesSumOrderByAggregateInput>;
export const LegalAcceptancesSumOrderByAggregateInputObjectZodSchema = makeSchema();
