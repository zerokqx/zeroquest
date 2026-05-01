import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalDocumentWhereInputObjectSchema as LegalDocumentWhereInputObjectSchema } from './LegalDocumentWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => LegalDocumentWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => LegalDocumentWhereInputObjectSchema).optional()
}).strict();
export const LegalDocumentScalarRelationFilterObjectSchema: z.ZodType<Prisma.LegalDocumentScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.LegalDocumentScalarRelationFilter>;
export const LegalDocumentScalarRelationFilterObjectZodSchema = makeSchema();
