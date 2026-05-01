import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalDocumentTypeSchema } from '../enums/LegalDocumentType.schema';
import { NestedEnumLegalDocumentTypeWithAggregatesFilterObjectSchema as NestedEnumLegalDocumentTypeWithAggregatesFilterObjectSchema } from './NestedEnumLegalDocumentTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumLegalDocumentTypeFilterObjectSchema as NestedEnumLegalDocumentTypeFilterObjectSchema } from './NestedEnumLegalDocumentTypeFilter.schema'

const makeSchema = () => z.object({
  equals: LegalDocumentTypeSchema.optional(),
  in: LegalDocumentTypeSchema.array().optional(),
  notIn: LegalDocumentTypeSchema.array().optional(),
  not: z.union([LegalDocumentTypeSchema, z.lazy(() => NestedEnumLegalDocumentTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumLegalDocumentTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumLegalDocumentTypeFilterObjectSchema).optional()
}).strict();
export const EnumLegalDocumentTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumLegalDocumentTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumLegalDocumentTypeWithAggregatesFilter>;
export const EnumLegalDocumentTypeWithAggregatesFilterObjectZodSchema = makeSchema();
