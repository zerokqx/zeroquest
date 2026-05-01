import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalAcceptancesCreateManyUserInputObjectSchema as LegalAcceptancesCreateManyUserInputObjectSchema } from './LegalAcceptancesCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => LegalAcceptancesCreateManyUserInputObjectSchema), z.lazy(() => LegalAcceptancesCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const LegalAcceptancesCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.LegalAcceptancesCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesCreateManyUserInputEnvelope>;
export const LegalAcceptancesCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
