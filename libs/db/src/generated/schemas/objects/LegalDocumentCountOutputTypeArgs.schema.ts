import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalDocumentCountOutputTypeSelectObjectSchema as LegalDocumentCountOutputTypeSelectObjectSchema } from './LegalDocumentCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => LegalDocumentCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const LegalDocumentCountOutputTypeArgsObjectSchema = makeSchema();
export const LegalDocumentCountOutputTypeArgsObjectZodSchema = makeSchema();
