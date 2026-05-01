import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalAcceptancesSelectObjectSchema as LegalAcceptancesSelectObjectSchema } from './LegalAcceptancesSelect.schema';
import { LegalAcceptancesIncludeObjectSchema as LegalAcceptancesIncludeObjectSchema } from './LegalAcceptancesInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => LegalAcceptancesSelectObjectSchema).optional(),
  include: z.lazy(() => LegalAcceptancesIncludeObjectSchema).optional()
}).strict();
export const LegalAcceptancesArgsObjectSchema = makeSchema();
export const LegalAcceptancesArgsObjectZodSchema = makeSchema();
