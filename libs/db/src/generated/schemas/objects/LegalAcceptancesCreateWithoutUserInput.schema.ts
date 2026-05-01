import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalDocumentCreateNestedOneWithoutLegalAcceptancesInputObjectSchema as LegalDocumentCreateNestedOneWithoutLegalAcceptancesInputObjectSchema } from './LegalDocumentCreateNestedOneWithoutLegalAcceptancesInput.schema'

const makeSchema = () => z.object({
  legalDocument: z.lazy(() => LegalDocumentCreateNestedOneWithoutLegalAcceptancesInputObjectSchema)
}).strict();
export const LegalAcceptancesCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesCreateWithoutUserInput>;
export const LegalAcceptancesCreateWithoutUserInputObjectZodSchema = makeSchema();
