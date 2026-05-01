import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalAcceptancesCreateWithoutUserInputObjectSchema as LegalAcceptancesCreateWithoutUserInputObjectSchema } from './LegalAcceptancesCreateWithoutUserInput.schema';
import { LegalAcceptancesUncheckedCreateWithoutUserInputObjectSchema as LegalAcceptancesUncheckedCreateWithoutUserInputObjectSchema } from './LegalAcceptancesUncheckedCreateWithoutUserInput.schema';
import { LegalAcceptancesCreateOrConnectWithoutUserInputObjectSchema as LegalAcceptancesCreateOrConnectWithoutUserInputObjectSchema } from './LegalAcceptancesCreateOrConnectWithoutUserInput.schema';
import { LegalAcceptancesUpsertWithWhereUniqueWithoutUserInputObjectSchema as LegalAcceptancesUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './LegalAcceptancesUpsertWithWhereUniqueWithoutUserInput.schema';
import { LegalAcceptancesCreateManyUserInputEnvelopeObjectSchema as LegalAcceptancesCreateManyUserInputEnvelopeObjectSchema } from './LegalAcceptancesCreateManyUserInputEnvelope.schema';
import { LegalAcceptancesWhereUniqueInputObjectSchema as LegalAcceptancesWhereUniqueInputObjectSchema } from './LegalAcceptancesWhereUniqueInput.schema';
import { LegalAcceptancesUpdateWithWhereUniqueWithoutUserInputObjectSchema as LegalAcceptancesUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './LegalAcceptancesUpdateWithWhereUniqueWithoutUserInput.schema';
import { LegalAcceptancesUpdateManyWithWhereWithoutUserInputObjectSchema as LegalAcceptancesUpdateManyWithWhereWithoutUserInputObjectSchema } from './LegalAcceptancesUpdateManyWithWhereWithoutUserInput.schema';
import { LegalAcceptancesScalarWhereInputObjectSchema as LegalAcceptancesScalarWhereInputObjectSchema } from './LegalAcceptancesScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LegalAcceptancesCreateWithoutUserInputObjectSchema), z.lazy(() => LegalAcceptancesCreateWithoutUserInputObjectSchema).array(), z.lazy(() => LegalAcceptancesUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => LegalAcceptancesUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LegalAcceptancesCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => LegalAcceptancesCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => LegalAcceptancesUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => LegalAcceptancesUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => LegalAcceptancesCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => LegalAcceptancesWhereUniqueInputObjectSchema), z.lazy(() => LegalAcceptancesWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => LegalAcceptancesWhereUniqueInputObjectSchema), z.lazy(() => LegalAcceptancesWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => LegalAcceptancesWhereUniqueInputObjectSchema), z.lazy(() => LegalAcceptancesWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => LegalAcceptancesWhereUniqueInputObjectSchema), z.lazy(() => LegalAcceptancesWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => LegalAcceptancesUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => LegalAcceptancesUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => LegalAcceptancesUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => LegalAcceptancesUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => LegalAcceptancesScalarWhereInputObjectSchema), z.lazy(() => LegalAcceptancesScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const LegalAcceptancesUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesUncheckedUpdateManyWithoutUserNestedInput>;
export const LegalAcceptancesUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
