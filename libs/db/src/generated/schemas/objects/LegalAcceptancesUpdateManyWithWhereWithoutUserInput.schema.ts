import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalAcceptancesScalarWhereInputObjectSchema as LegalAcceptancesScalarWhereInputObjectSchema } from './LegalAcceptancesScalarWhereInput.schema';
import { LegalAcceptancesUpdateManyMutationInputObjectSchema as LegalAcceptancesUpdateManyMutationInputObjectSchema } from './LegalAcceptancesUpdateManyMutationInput.schema';
import { LegalAcceptancesUncheckedUpdateManyWithoutUserInputObjectSchema as LegalAcceptancesUncheckedUpdateManyWithoutUserInputObjectSchema } from './LegalAcceptancesUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LegalAcceptancesScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => LegalAcceptancesUpdateManyMutationInputObjectSchema), z.lazy(() => LegalAcceptancesUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const LegalAcceptancesUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesUpdateManyWithWhereWithoutUserInput>;
export const LegalAcceptancesUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
