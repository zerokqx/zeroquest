import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalAcceptancesWhereUniqueInputObjectSchema as LegalAcceptancesWhereUniqueInputObjectSchema } from './LegalAcceptancesWhereUniqueInput.schema';
import { LegalAcceptancesUpdateWithoutUserInputObjectSchema as LegalAcceptancesUpdateWithoutUserInputObjectSchema } from './LegalAcceptancesUpdateWithoutUserInput.schema';
import { LegalAcceptancesUncheckedUpdateWithoutUserInputObjectSchema as LegalAcceptancesUncheckedUpdateWithoutUserInputObjectSchema } from './LegalAcceptancesUncheckedUpdateWithoutUserInput.schema';
import { LegalAcceptancesCreateWithoutUserInputObjectSchema as LegalAcceptancesCreateWithoutUserInputObjectSchema } from './LegalAcceptancesCreateWithoutUserInput.schema';
import { LegalAcceptancesUncheckedCreateWithoutUserInputObjectSchema as LegalAcceptancesUncheckedCreateWithoutUserInputObjectSchema } from './LegalAcceptancesUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LegalAcceptancesWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => LegalAcceptancesUpdateWithoutUserInputObjectSchema), z.lazy(() => LegalAcceptancesUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => LegalAcceptancesCreateWithoutUserInputObjectSchema), z.lazy(() => LegalAcceptancesUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const LegalAcceptancesUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesUpsertWithWhereUniqueWithoutUserInput>;
export const LegalAcceptancesUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
