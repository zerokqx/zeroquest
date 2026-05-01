import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { LegalDocumentArgsObjectSchema as LegalDocumentArgsObjectSchema } from './LegalDocumentArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  userId: z.boolean().optional(),
  legalDocumentId: z.boolean().optional(),
  legalDocument: z.union([z.boolean(), z.lazy(() => LegalDocumentArgsObjectSchema)]).optional()
}).strict();
export const LegalAcceptancesSelectObjectSchema: z.ZodType<Prisma.LegalAcceptancesSelect> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesSelect>;
export const LegalAcceptancesSelectObjectZodSchema = makeSchema();
