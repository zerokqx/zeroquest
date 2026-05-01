import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalAcceptancesScalarWhereInputObjectSchema as LegalAcceptancesScalarWhereInputObjectSchema } from './LegalAcceptancesScalarWhereInput.schema';
import { LegalAcceptancesUpdateManyMutationInputObjectSchema as LegalAcceptancesUpdateManyMutationInputObjectSchema } from './LegalAcceptancesUpdateManyMutationInput.schema';
import { LegalAcceptancesUncheckedUpdateManyWithoutLegalDocumentInputObjectSchema as LegalAcceptancesUncheckedUpdateManyWithoutLegalDocumentInputObjectSchema } from './LegalAcceptancesUncheckedUpdateManyWithoutLegalDocumentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LegalAcceptancesScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => LegalAcceptancesUpdateManyMutationInputObjectSchema), z.lazy(() => LegalAcceptancesUncheckedUpdateManyWithoutLegalDocumentInputObjectSchema)])
}).strict();
export const LegalAcceptancesUpdateManyWithWhereWithoutLegalDocumentInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesUpdateManyWithWhereWithoutLegalDocumentInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesUpdateManyWithWhereWithoutLegalDocumentInput>;
export const LegalAcceptancesUpdateManyWithWhereWithoutLegalDocumentInputObjectZodSchema = makeSchema();
