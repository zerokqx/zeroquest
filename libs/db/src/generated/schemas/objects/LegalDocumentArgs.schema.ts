import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalDocumentSelectObjectSchema as LegalDocumentSelectObjectSchema } from './LegalDocumentSelect.schema';
import { LegalDocumentIncludeObjectSchema as LegalDocumentIncludeObjectSchema } from './LegalDocumentInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => LegalDocumentSelectObjectSchema).optional(),
  include: z.lazy(() => LegalDocumentIncludeObjectSchema).optional()
}).strict();
export const LegalDocumentArgsObjectSchema = makeSchema();
export const LegalDocumentArgsObjectZodSchema = makeSchema();
