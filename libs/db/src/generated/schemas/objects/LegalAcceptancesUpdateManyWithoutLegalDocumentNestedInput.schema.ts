import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalAcceptancesCreateWithoutLegalDocumentInputObjectSchema as LegalAcceptancesCreateWithoutLegalDocumentInputObjectSchema } from './LegalAcceptancesCreateWithoutLegalDocumentInput.schema';
import { LegalAcceptancesUncheckedCreateWithoutLegalDocumentInputObjectSchema as LegalAcceptancesUncheckedCreateWithoutLegalDocumentInputObjectSchema } from './LegalAcceptancesUncheckedCreateWithoutLegalDocumentInput.schema';
import { LegalAcceptancesCreateOrConnectWithoutLegalDocumentInputObjectSchema as LegalAcceptancesCreateOrConnectWithoutLegalDocumentInputObjectSchema } from './LegalAcceptancesCreateOrConnectWithoutLegalDocumentInput.schema';
import { LegalAcceptancesUpsertWithWhereUniqueWithoutLegalDocumentInputObjectSchema as LegalAcceptancesUpsertWithWhereUniqueWithoutLegalDocumentInputObjectSchema } from './LegalAcceptancesUpsertWithWhereUniqueWithoutLegalDocumentInput.schema';
import { LegalAcceptancesCreateManyLegalDocumentInputEnvelopeObjectSchema as LegalAcceptancesCreateManyLegalDocumentInputEnvelopeObjectSchema } from './LegalAcceptancesCreateManyLegalDocumentInputEnvelope.schema';
import { LegalAcceptancesWhereUniqueInputObjectSchema as LegalAcceptancesWhereUniqueInputObjectSchema } from './LegalAcceptancesWhereUniqueInput.schema';
import { LegalAcceptancesUpdateWithWhereUniqueWithoutLegalDocumentInputObjectSchema as LegalAcceptancesUpdateWithWhereUniqueWithoutLegalDocumentInputObjectSchema } from './LegalAcceptancesUpdateWithWhereUniqueWithoutLegalDocumentInput.schema';
import { LegalAcceptancesUpdateManyWithWhereWithoutLegalDocumentInputObjectSchema as LegalAcceptancesUpdateManyWithWhereWithoutLegalDocumentInputObjectSchema } from './LegalAcceptancesUpdateManyWithWhereWithoutLegalDocumentInput.schema';
import { LegalAcceptancesScalarWhereInputObjectSchema as LegalAcceptancesScalarWhereInputObjectSchema } from './LegalAcceptancesScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LegalAcceptancesCreateWithoutLegalDocumentInputObjectSchema), z.lazy(() => LegalAcceptancesCreateWithoutLegalDocumentInputObjectSchema).array(), z.lazy(() => LegalAcceptancesUncheckedCreateWithoutLegalDocumentInputObjectSchema), z.lazy(() => LegalAcceptancesUncheckedCreateWithoutLegalDocumentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LegalAcceptancesCreateOrConnectWithoutLegalDocumentInputObjectSchema), z.lazy(() => LegalAcceptancesCreateOrConnectWithoutLegalDocumentInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => LegalAcceptancesUpsertWithWhereUniqueWithoutLegalDocumentInputObjectSchema), z.lazy(() => LegalAcceptancesUpsertWithWhereUniqueWithoutLegalDocumentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => LegalAcceptancesCreateManyLegalDocumentInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => LegalAcceptancesWhereUniqueInputObjectSchema), z.lazy(() => LegalAcceptancesWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => LegalAcceptancesWhereUniqueInputObjectSchema), z.lazy(() => LegalAcceptancesWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => LegalAcceptancesWhereUniqueInputObjectSchema), z.lazy(() => LegalAcceptancesWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => LegalAcceptancesWhereUniqueInputObjectSchema), z.lazy(() => LegalAcceptancesWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => LegalAcceptancesUpdateWithWhereUniqueWithoutLegalDocumentInputObjectSchema), z.lazy(() => LegalAcceptancesUpdateWithWhereUniqueWithoutLegalDocumentInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => LegalAcceptancesUpdateManyWithWhereWithoutLegalDocumentInputObjectSchema), z.lazy(() => LegalAcceptancesUpdateManyWithWhereWithoutLegalDocumentInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => LegalAcceptancesScalarWhereInputObjectSchema), z.lazy(() => LegalAcceptancesScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const LegalAcceptancesUpdateManyWithoutLegalDocumentNestedInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesUpdateManyWithoutLegalDocumentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesUpdateManyWithoutLegalDocumentNestedInput>;
export const LegalAcceptancesUpdateManyWithoutLegalDocumentNestedInputObjectZodSchema = makeSchema();
