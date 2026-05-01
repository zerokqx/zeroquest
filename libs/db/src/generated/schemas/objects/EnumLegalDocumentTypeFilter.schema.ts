import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalDocumentTypeSchema } from '../enums/LegalDocumentType.schema';
import { NestedEnumLegalDocumentTypeFilterObjectSchema as NestedEnumLegalDocumentTypeFilterObjectSchema } from './NestedEnumLegalDocumentTypeFilter.schema'

const makeSchema = () => z.object({
  equals: LegalDocumentTypeSchema.optional(),
  in: LegalDocumentTypeSchema.array().optional(),
  notIn: LegalDocumentTypeSchema.array().optional(),
  not: z.union([LegalDocumentTypeSchema, z.lazy(() => NestedEnumLegalDocumentTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumLegalDocumentTypeFilterObjectSchema: z.ZodType<Prisma.EnumLegalDocumentTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumLegalDocumentTypeFilter>;
export const EnumLegalDocumentTypeFilterObjectZodSchema = makeSchema();
