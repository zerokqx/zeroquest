import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalDocumentTypeSchema } from '../enums/LegalDocumentType.schema'

const nestedenumlegaldocumenttypefilterSchema = z.object({
  equals: LegalDocumentTypeSchema.optional(),
  in: LegalDocumentTypeSchema.array().optional(),
  notIn: LegalDocumentTypeSchema.array().optional(),
  not: z.union([LegalDocumentTypeSchema, z.lazy(() => NestedEnumLegalDocumentTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumLegalDocumentTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumLegalDocumentTypeFilter> = nestedenumlegaldocumenttypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumLegalDocumentTypeFilter>;
export const NestedEnumLegalDocumentTypeFilterObjectZodSchema = nestedenumlegaldocumenttypefilterSchema;
