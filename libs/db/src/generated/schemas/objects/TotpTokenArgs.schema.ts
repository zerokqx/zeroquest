import * as z from 'zod';
import type { Prisma } from '../../client';
import { TotpTokenSelectObjectSchema as TotpTokenSelectObjectSchema } from './TotpTokenSelect.schema';
import { TotpTokenIncludeObjectSchema as TotpTokenIncludeObjectSchema } from './TotpTokenInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TotpTokenSelectObjectSchema).optional(),
  include: z.lazy(() => TotpTokenIncludeObjectSchema).optional()
}).strict();
export const TotpTokenArgsObjectSchema = makeSchema();
export const TotpTokenArgsObjectZodSchema = makeSchema();
