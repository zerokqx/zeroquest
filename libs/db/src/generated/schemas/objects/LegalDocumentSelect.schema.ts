import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalAcceptancesFindManySchema as LegalAcceptancesFindManySchema } from '../findManyLegalAcceptances.schema';
import { LegalDocumentCountOutputTypeArgsObjectSchema as LegalDocumentCountOutputTypeArgsObjectSchema } from './LegalDocumentCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  version: z.boolean().optional(),
  content: z.boolean().optional(),
  legalAcceptances: z.union([z.boolean(), z.lazy(() => LegalAcceptancesFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => LegalDocumentCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const LegalDocumentSelectObjectSchema: z.ZodType<Prisma.LegalDocumentSelect> = makeSchema() as unknown as z.ZodType<Prisma.LegalDocumentSelect>;
export const LegalDocumentSelectObjectZodSchema = makeSchema();
