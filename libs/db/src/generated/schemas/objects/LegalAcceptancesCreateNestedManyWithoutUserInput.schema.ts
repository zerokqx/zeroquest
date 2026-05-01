import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalAcceptancesCreateWithoutUserInputObjectSchema as LegalAcceptancesCreateWithoutUserInputObjectSchema } from './LegalAcceptancesCreateWithoutUserInput.schema';
import { LegalAcceptancesUncheckedCreateWithoutUserInputObjectSchema as LegalAcceptancesUncheckedCreateWithoutUserInputObjectSchema } from './LegalAcceptancesUncheckedCreateWithoutUserInput.schema';
import { LegalAcceptancesCreateOrConnectWithoutUserInputObjectSchema as LegalAcceptancesCreateOrConnectWithoutUserInputObjectSchema } from './LegalAcceptancesCreateOrConnectWithoutUserInput.schema';
import { LegalAcceptancesCreateManyUserInputEnvelopeObjectSchema as LegalAcceptancesCreateManyUserInputEnvelopeObjectSchema } from './LegalAcceptancesCreateManyUserInputEnvelope.schema';
import { LegalAcceptancesWhereUniqueInputObjectSchema as LegalAcceptancesWhereUniqueInputObjectSchema } from './LegalAcceptancesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LegalAcceptancesCreateWithoutUserInputObjectSchema), z.lazy(() => LegalAcceptancesCreateWithoutUserInputObjectSchema).array(), z.lazy(() => LegalAcceptancesUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => LegalAcceptancesUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LegalAcceptancesCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => LegalAcceptancesCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => LegalAcceptancesCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => LegalAcceptancesWhereUniqueInputObjectSchema), z.lazy(() => LegalAcceptancesWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const LegalAcceptancesCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesCreateNestedManyWithoutUserInput>;
export const LegalAcceptancesCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
