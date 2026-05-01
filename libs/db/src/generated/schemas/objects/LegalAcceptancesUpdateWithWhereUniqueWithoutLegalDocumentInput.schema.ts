import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalAcceptancesWhereUniqueInputObjectSchema as LegalAcceptancesWhereUniqueInputObjectSchema } from './LegalAcceptancesWhereUniqueInput.schema';
import { LegalAcceptancesUpdateWithoutLegalDocumentInputObjectSchema as LegalAcceptancesUpdateWithoutLegalDocumentInputObjectSchema } from './LegalAcceptancesUpdateWithoutLegalDocumentInput.schema';
import { LegalAcceptancesUncheckedUpdateWithoutLegalDocumentInputObjectSchema as LegalAcceptancesUncheckedUpdateWithoutLegalDocumentInputObjectSchema } from './LegalAcceptancesUncheckedUpdateWithoutLegalDocumentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LegalAcceptancesWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => LegalAcceptancesUpdateWithoutLegalDocumentInputObjectSchema), z.lazy(() => LegalAcceptancesUncheckedUpdateWithoutLegalDocumentInputObjectSchema)])
}).strict();
export const LegalAcceptancesUpdateWithWhereUniqueWithoutLegalDocumentInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesUpdateWithWhereUniqueWithoutLegalDocumentInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesUpdateWithWhereUniqueWithoutLegalDocumentInput>;
export const LegalAcceptancesUpdateWithWhereUniqueWithoutLegalDocumentInputObjectZodSchema = makeSchema();
