import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { EnumLegalDocumentTypeFilterObjectSchema as EnumLegalDocumentTypeFilterObjectSchema } from './EnumLegalDocumentTypeFilter.schema';
import { LegalDocumentTypeSchema } from '../enums/LegalDocumentType.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { LegalAcceptancesListRelationFilterObjectSchema as LegalAcceptancesListRelationFilterObjectSchema } from './LegalAcceptancesListRelationFilter.schema'

const legaldocumentwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => LegalDocumentWhereInputObjectSchema), z.lazy(() => LegalDocumentWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LegalDocumentWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LegalDocumentWhereInputObjectSchema), z.lazy(() => LegalDocumentWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  type: z.union([z.lazy(() => EnumLegalDocumentTypeFilterObjectSchema), LegalDocumentTypeSchema]).optional(),
  version: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  content: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  legalAcceptances: z.lazy(() => LegalAcceptancesListRelationFilterObjectSchema).optional()
}).strict();
export const LegalDocumentWhereInputObjectSchema: z.ZodType<Prisma.LegalDocumentWhereInput> = legaldocumentwhereinputSchema as unknown as z.ZodType<Prisma.LegalDocumentWhereInput>;
export const LegalDocumentWhereInputObjectZodSchema = legaldocumentwhereinputSchema;
