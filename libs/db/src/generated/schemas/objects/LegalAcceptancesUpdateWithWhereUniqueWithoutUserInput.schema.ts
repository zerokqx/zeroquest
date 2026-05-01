import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalAcceptancesWhereUniqueInputObjectSchema as LegalAcceptancesWhereUniqueInputObjectSchema } from './LegalAcceptancesWhereUniqueInput.schema';
import { LegalAcceptancesUpdateWithoutUserInputObjectSchema as LegalAcceptancesUpdateWithoutUserInputObjectSchema } from './LegalAcceptancesUpdateWithoutUserInput.schema';
import { LegalAcceptancesUncheckedUpdateWithoutUserInputObjectSchema as LegalAcceptancesUncheckedUpdateWithoutUserInputObjectSchema } from './LegalAcceptancesUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LegalAcceptancesWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => LegalAcceptancesUpdateWithoutUserInputObjectSchema), z.lazy(() => LegalAcceptancesUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const LegalAcceptancesUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesUpdateWithWhereUniqueWithoutUserInput>;
export const LegalAcceptancesUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
