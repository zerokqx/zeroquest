import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { EnumLegalDocumentTypeWithAggregatesFilterObjectSchema as EnumLegalDocumentTypeWithAggregatesFilterObjectSchema } from './EnumLegalDocumentTypeWithAggregatesFilter.schema';
import { LegalDocumentTypeSchema } from '../enums/LegalDocumentType.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const legaldocumentscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => LegalDocumentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => LegalDocumentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LegalDocumentScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LegalDocumentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => LegalDocumentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  type: z.union([z.lazy(() => EnumLegalDocumentTypeWithAggregatesFilterObjectSchema), LegalDocumentTypeSchema]).optional(),
  version: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  content: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const LegalDocumentScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.LegalDocumentScalarWhereWithAggregatesInput> = legaldocumentscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.LegalDocumentScalarWhereWithAggregatesInput>;
export const LegalDocumentScalarWhereWithAggregatesInputObjectZodSchema = legaldocumentscalarwherewithaggregatesinputSchema;
