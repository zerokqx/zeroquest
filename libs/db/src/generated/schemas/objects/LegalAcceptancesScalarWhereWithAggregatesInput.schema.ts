import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const legalacceptancesscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => LegalAcceptancesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => LegalAcceptancesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LegalAcceptancesScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LegalAcceptancesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => LegalAcceptancesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  legalDocumentId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const LegalAcceptancesScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesScalarWhereWithAggregatesInput> = legalacceptancesscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.LegalAcceptancesScalarWhereWithAggregatesInput>;
export const LegalAcceptancesScalarWhereWithAggregatesInputObjectZodSchema = legalacceptancesscalarwherewithaggregatesinputSchema;
