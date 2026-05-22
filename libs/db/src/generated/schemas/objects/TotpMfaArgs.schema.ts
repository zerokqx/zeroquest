import * as z from 'zod';
import type { Prisma } from '../../client';
import { TotpMfaSelectObjectSchema as TotpMfaSelectObjectSchema } from './TotpMfaSelect.schema';
import { TotpMfaIncludeObjectSchema as TotpMfaIncludeObjectSchema } from './TotpMfaInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TotpMfaSelectObjectSchema).optional(),
  include: z.lazy(() => TotpMfaIncludeObjectSchema).optional()
}).strict();
export const TotpMfaArgsObjectSchema = makeSchema();
export const TotpMfaArgsObjectZodSchema = makeSchema();
