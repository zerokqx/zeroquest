import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalDocumentTypeSchema } from '../enums/LegalDocumentType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumLegalDocumentTypeFilterObjectSchema as NestedEnumLegalDocumentTypeFilterObjectSchema } from './NestedEnumLegalDocumentTypeFilter.schema'

const nestedenumlegaldocumenttypewithaggregatesfilterSchema = z.object({
  equals: LegalDocumentTypeSchema.optional(),
  in: LegalDocumentTypeSchema.array().optional(),
  notIn: LegalDocumentTypeSchema.array().optional(),
  not: z.union([LegalDocumentTypeSchema, z.lazy(() => NestedEnumLegalDocumentTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumLegalDocumentTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumLegalDocumentTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumLegalDocumentTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumLegalDocumentTypeWithAggregatesFilter> = nestedenumlegaldocumenttypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumLegalDocumentTypeWithAggregatesFilter>;
export const NestedEnumLegalDocumentTypeWithAggregatesFilterObjectZodSchema = nestedenumlegaldocumenttypewithaggregatesfilterSchema;
