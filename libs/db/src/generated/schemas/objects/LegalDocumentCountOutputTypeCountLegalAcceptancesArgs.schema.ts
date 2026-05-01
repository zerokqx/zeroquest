import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalAcceptancesWhereInputObjectSchema as LegalAcceptancesWhereInputObjectSchema } from './LegalAcceptancesWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LegalAcceptancesWhereInputObjectSchema).optional()
}).strict();
export const LegalDocumentCountOutputTypeCountLegalAcceptancesArgsObjectSchema = makeSchema();
export const LegalDocumentCountOutputTypeCountLegalAcceptancesArgsObjectZodSchema = makeSchema();
