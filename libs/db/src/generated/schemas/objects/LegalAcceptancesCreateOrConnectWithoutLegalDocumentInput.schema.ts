import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalAcceptancesWhereUniqueInputObjectSchema as LegalAcceptancesWhereUniqueInputObjectSchema } from './LegalAcceptancesWhereUniqueInput.schema';
import { LegalAcceptancesCreateWithoutLegalDocumentInputObjectSchema as LegalAcceptancesCreateWithoutLegalDocumentInputObjectSchema } from './LegalAcceptancesCreateWithoutLegalDocumentInput.schema';
import { LegalAcceptancesUncheckedCreateWithoutLegalDocumentInputObjectSchema as LegalAcceptancesUncheckedCreateWithoutLegalDocumentInputObjectSchema } from './LegalAcceptancesUncheckedCreateWithoutLegalDocumentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LegalAcceptancesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => LegalAcceptancesCreateWithoutLegalDocumentInputObjectSchema), z.lazy(() => LegalAcceptancesUncheckedCreateWithoutLegalDocumentInputObjectSchema)])
}).strict();
export const LegalAcceptancesCreateOrConnectWithoutLegalDocumentInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesCreateOrConnectWithoutLegalDocumentInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesCreateOrConnectWithoutLegalDocumentInput>;
export const LegalAcceptancesCreateOrConnectWithoutLegalDocumentInputObjectZodSchema = makeSchema();
