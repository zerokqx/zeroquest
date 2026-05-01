import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalAcceptancesWhereUniqueInputObjectSchema as LegalAcceptancesWhereUniqueInputObjectSchema } from './LegalAcceptancesWhereUniqueInput.schema';
import { LegalAcceptancesUpdateWithoutLegalDocumentInputObjectSchema as LegalAcceptancesUpdateWithoutLegalDocumentInputObjectSchema } from './LegalAcceptancesUpdateWithoutLegalDocumentInput.schema';
import { LegalAcceptancesUncheckedUpdateWithoutLegalDocumentInputObjectSchema as LegalAcceptancesUncheckedUpdateWithoutLegalDocumentInputObjectSchema } from './LegalAcceptancesUncheckedUpdateWithoutLegalDocumentInput.schema';
import { LegalAcceptancesCreateWithoutLegalDocumentInputObjectSchema as LegalAcceptancesCreateWithoutLegalDocumentInputObjectSchema } from './LegalAcceptancesCreateWithoutLegalDocumentInput.schema';
import { LegalAcceptancesUncheckedCreateWithoutLegalDocumentInputObjectSchema as LegalAcceptancesUncheckedCreateWithoutLegalDocumentInputObjectSchema } from './LegalAcceptancesUncheckedCreateWithoutLegalDocumentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LegalAcceptancesWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => LegalAcceptancesUpdateWithoutLegalDocumentInputObjectSchema), z.lazy(() => LegalAcceptancesUncheckedUpdateWithoutLegalDocumentInputObjectSchema)]),
  create: z.union([z.lazy(() => LegalAcceptancesCreateWithoutLegalDocumentInputObjectSchema), z.lazy(() => LegalAcceptancesUncheckedCreateWithoutLegalDocumentInputObjectSchema)])
}).strict();
export const LegalAcceptancesUpsertWithWhereUniqueWithoutLegalDocumentInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesUpsertWithWhereUniqueWithoutLegalDocumentInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesUpsertWithWhereUniqueWithoutLegalDocumentInput>;
export const LegalAcceptancesUpsertWithWhereUniqueWithoutLegalDocumentInputObjectZodSchema = makeSchema();
