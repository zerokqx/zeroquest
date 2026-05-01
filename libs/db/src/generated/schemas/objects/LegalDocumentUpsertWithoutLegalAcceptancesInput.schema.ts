import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalDocumentUpdateWithoutLegalAcceptancesInputObjectSchema as LegalDocumentUpdateWithoutLegalAcceptancesInputObjectSchema } from './LegalDocumentUpdateWithoutLegalAcceptancesInput.schema';
import { LegalDocumentUncheckedUpdateWithoutLegalAcceptancesInputObjectSchema as LegalDocumentUncheckedUpdateWithoutLegalAcceptancesInputObjectSchema } from './LegalDocumentUncheckedUpdateWithoutLegalAcceptancesInput.schema';
import { LegalDocumentCreateWithoutLegalAcceptancesInputObjectSchema as LegalDocumentCreateWithoutLegalAcceptancesInputObjectSchema } from './LegalDocumentCreateWithoutLegalAcceptancesInput.schema';
import { LegalDocumentUncheckedCreateWithoutLegalAcceptancesInputObjectSchema as LegalDocumentUncheckedCreateWithoutLegalAcceptancesInputObjectSchema } from './LegalDocumentUncheckedCreateWithoutLegalAcceptancesInput.schema';
import { LegalDocumentWhereInputObjectSchema as LegalDocumentWhereInputObjectSchema } from './LegalDocumentWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => LegalDocumentUpdateWithoutLegalAcceptancesInputObjectSchema), z.lazy(() => LegalDocumentUncheckedUpdateWithoutLegalAcceptancesInputObjectSchema)]),
  create: z.union([z.lazy(() => LegalDocumentCreateWithoutLegalAcceptancesInputObjectSchema), z.lazy(() => LegalDocumentUncheckedCreateWithoutLegalAcceptancesInputObjectSchema)]),
  where: z.lazy(() => LegalDocumentWhereInputObjectSchema).optional()
}).strict();
export const LegalDocumentUpsertWithoutLegalAcceptancesInputObjectSchema: z.ZodType<Prisma.LegalDocumentUpsertWithoutLegalAcceptancesInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalDocumentUpsertWithoutLegalAcceptancesInput>;
export const LegalDocumentUpsertWithoutLegalAcceptancesInputObjectZodSchema = makeSchema();
