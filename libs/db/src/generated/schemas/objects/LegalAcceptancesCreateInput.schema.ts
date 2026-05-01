import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserCreateNestedOneWithoutLegalAcceptancesInputObjectSchema as UserCreateNestedOneWithoutLegalAcceptancesInputObjectSchema } from './UserCreateNestedOneWithoutLegalAcceptancesInput.schema';
import { LegalDocumentCreateNestedOneWithoutLegalAcceptancesInputObjectSchema as LegalDocumentCreateNestedOneWithoutLegalAcceptancesInputObjectSchema } from './LegalDocumentCreateNestedOneWithoutLegalAcceptancesInput.schema'

const makeSchema = () => z.object({
  user: z.lazy(() => UserCreateNestedOneWithoutLegalAcceptancesInputObjectSchema),
  legalDocument: z.lazy(() => LegalDocumentCreateNestedOneWithoutLegalAcceptancesInputObjectSchema)
}).strict();
export const LegalAcceptancesCreateInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesCreateInput>;
export const LegalAcceptancesCreateInputObjectZodSchema = makeSchema();
