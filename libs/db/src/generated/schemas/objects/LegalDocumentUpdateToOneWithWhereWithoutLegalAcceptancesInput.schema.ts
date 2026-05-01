import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalDocumentWhereInputObjectSchema as LegalDocumentWhereInputObjectSchema } from './LegalDocumentWhereInput.schema';
import { LegalDocumentUpdateWithoutLegalAcceptancesInputObjectSchema as LegalDocumentUpdateWithoutLegalAcceptancesInputObjectSchema } from './LegalDocumentUpdateWithoutLegalAcceptancesInput.schema';
import { LegalDocumentUncheckedUpdateWithoutLegalAcceptancesInputObjectSchema as LegalDocumentUncheckedUpdateWithoutLegalAcceptancesInputObjectSchema } from './LegalDocumentUncheckedUpdateWithoutLegalAcceptancesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LegalDocumentWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => LegalDocumentUpdateWithoutLegalAcceptancesInputObjectSchema), z.lazy(() => LegalDocumentUncheckedUpdateWithoutLegalAcceptancesInputObjectSchema)])
}).strict();
export const LegalDocumentUpdateToOneWithWhereWithoutLegalAcceptancesInputObjectSchema: z.ZodType<Prisma.LegalDocumentUpdateToOneWithWhereWithoutLegalAcceptancesInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalDocumentUpdateToOneWithWhereWithoutLegalAcceptancesInput>;
export const LegalDocumentUpdateToOneWithWhereWithoutLegalAcceptancesInputObjectZodSchema = makeSchema();
