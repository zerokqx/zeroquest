import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalDocumentWhereUniqueInputObjectSchema as LegalDocumentWhereUniqueInputObjectSchema } from './LegalDocumentWhereUniqueInput.schema';
import { LegalDocumentCreateWithoutLegalAcceptancesInputObjectSchema as LegalDocumentCreateWithoutLegalAcceptancesInputObjectSchema } from './LegalDocumentCreateWithoutLegalAcceptancesInput.schema';
import { LegalDocumentUncheckedCreateWithoutLegalAcceptancesInputObjectSchema as LegalDocumentUncheckedCreateWithoutLegalAcceptancesInputObjectSchema } from './LegalDocumentUncheckedCreateWithoutLegalAcceptancesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LegalDocumentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => LegalDocumentCreateWithoutLegalAcceptancesInputObjectSchema), z.lazy(() => LegalDocumentUncheckedCreateWithoutLegalAcceptancesInputObjectSchema)])
}).strict();
export const LegalDocumentCreateOrConnectWithoutLegalAcceptancesInputObjectSchema: z.ZodType<Prisma.LegalDocumentCreateOrConnectWithoutLegalAcceptancesInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalDocumentCreateOrConnectWithoutLegalAcceptancesInput>;
export const LegalDocumentCreateOrConnectWithoutLegalAcceptancesInputObjectZodSchema = makeSchema();
