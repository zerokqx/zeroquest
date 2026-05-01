import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalAcceptancesFindManySchema as LegalAcceptancesFindManySchema } from '../findManyLegalAcceptances.schema';
import { LegalDocumentCountOutputTypeArgsObjectSchema as LegalDocumentCountOutputTypeArgsObjectSchema } from './LegalDocumentCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  legalAcceptances: z.union([z.boolean(), z.lazy(() => LegalAcceptancesFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => LegalDocumentCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const LegalDocumentIncludeObjectSchema: z.ZodType<Prisma.LegalDocumentInclude> = makeSchema() as unknown as z.ZodType<Prisma.LegalDocumentInclude>;
export const LegalDocumentIncludeObjectZodSchema = makeSchema();
