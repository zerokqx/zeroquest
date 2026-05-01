import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalAcceptancesWhereUniqueInputObjectSchema as LegalAcceptancesWhereUniqueInputObjectSchema } from './LegalAcceptancesWhereUniqueInput.schema';
import { LegalAcceptancesCreateWithoutUserInputObjectSchema as LegalAcceptancesCreateWithoutUserInputObjectSchema } from './LegalAcceptancesCreateWithoutUserInput.schema';
import { LegalAcceptancesUncheckedCreateWithoutUserInputObjectSchema as LegalAcceptancesUncheckedCreateWithoutUserInputObjectSchema } from './LegalAcceptancesUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LegalAcceptancesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => LegalAcceptancesCreateWithoutUserInputObjectSchema), z.lazy(() => LegalAcceptancesUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const LegalAcceptancesCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesCreateOrConnectWithoutUserInput>;
export const LegalAcceptancesCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
