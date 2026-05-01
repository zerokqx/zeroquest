import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalAcceptancesCreateWithoutLegalDocumentInputObjectSchema as LegalAcceptancesCreateWithoutLegalDocumentInputObjectSchema } from './LegalAcceptancesCreateWithoutLegalDocumentInput.schema';
import { LegalAcceptancesUncheckedCreateWithoutLegalDocumentInputObjectSchema as LegalAcceptancesUncheckedCreateWithoutLegalDocumentInputObjectSchema } from './LegalAcceptancesUncheckedCreateWithoutLegalDocumentInput.schema';
import { LegalAcceptancesCreateOrConnectWithoutLegalDocumentInputObjectSchema as LegalAcceptancesCreateOrConnectWithoutLegalDocumentInputObjectSchema } from './LegalAcceptancesCreateOrConnectWithoutLegalDocumentInput.schema';
import { LegalAcceptancesCreateManyLegalDocumentInputEnvelopeObjectSchema as LegalAcceptancesCreateManyLegalDocumentInputEnvelopeObjectSchema } from './LegalAcceptancesCreateManyLegalDocumentInputEnvelope.schema';
import { LegalAcceptancesWhereUniqueInputObjectSchema as LegalAcceptancesWhereUniqueInputObjectSchema } from './LegalAcceptancesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LegalAcceptancesCreateWithoutLegalDocumentInputObjectSchema), z.lazy(() => LegalAcceptancesCreateWithoutLegalDocumentInputObjectSchema).array(), z.lazy(() => LegalAcceptancesUncheckedCreateWithoutLegalDocumentInputObjectSchema), z.lazy(() => LegalAcceptancesUncheckedCreateWithoutLegalDocumentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LegalAcceptancesCreateOrConnectWithoutLegalDocumentInputObjectSchema), z.lazy(() => LegalAcceptancesCreateOrConnectWithoutLegalDocumentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => LegalAcceptancesCreateManyLegalDocumentInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => LegalAcceptancesWhereUniqueInputObjectSchema), z.lazy(() => LegalAcceptancesWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const LegalAcceptancesUncheckedCreateNestedManyWithoutLegalDocumentInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesUncheckedCreateNestedManyWithoutLegalDocumentInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesUncheckedCreateNestedManyWithoutLegalDocumentInput>;
export const LegalAcceptancesUncheckedCreateNestedManyWithoutLegalDocumentInputObjectZodSchema = makeSchema();
