import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalDocumentCountOutputTypeCountLegalAcceptancesArgsObjectSchema as LegalDocumentCountOutputTypeCountLegalAcceptancesArgsObjectSchema } from './LegalDocumentCountOutputTypeCountLegalAcceptancesArgs.schema'

const makeSchema = () => z.object({
  legalAcceptances: z.union([z.boolean(), z.lazy(() => LegalDocumentCountOutputTypeCountLegalAcceptancesArgsObjectSchema)]).optional()
}).strict();
export const LegalDocumentCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.LegalDocumentCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.LegalDocumentCountOutputTypeSelect>;
export const LegalDocumentCountOutputTypeSelectObjectZodSchema = makeSchema();
