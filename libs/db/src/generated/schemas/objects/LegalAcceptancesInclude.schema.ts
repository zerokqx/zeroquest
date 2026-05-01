import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { LegalDocumentArgsObjectSchema as LegalDocumentArgsObjectSchema } from './LegalDocumentArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  legalDocument: z.union([z.boolean(), z.lazy(() => LegalDocumentArgsObjectSchema)]).optional()
}).strict();
export const LegalAcceptancesIncludeObjectSchema: z.ZodType<Prisma.LegalAcceptancesInclude> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesInclude>;
export const LegalAcceptancesIncludeObjectZodSchema = makeSchema();
