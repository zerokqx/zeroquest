import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalDocumentCreateWithoutLegalAcceptancesInputObjectSchema as LegalDocumentCreateWithoutLegalAcceptancesInputObjectSchema } from './LegalDocumentCreateWithoutLegalAcceptancesInput.schema';
import { LegalDocumentUncheckedCreateWithoutLegalAcceptancesInputObjectSchema as LegalDocumentUncheckedCreateWithoutLegalAcceptancesInputObjectSchema } from './LegalDocumentUncheckedCreateWithoutLegalAcceptancesInput.schema';
import { LegalDocumentCreateOrConnectWithoutLegalAcceptancesInputObjectSchema as LegalDocumentCreateOrConnectWithoutLegalAcceptancesInputObjectSchema } from './LegalDocumentCreateOrConnectWithoutLegalAcceptancesInput.schema';
import { LegalDocumentWhereUniqueInputObjectSchema as LegalDocumentWhereUniqueInputObjectSchema } from './LegalDocumentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LegalDocumentCreateWithoutLegalAcceptancesInputObjectSchema), z.lazy(() => LegalDocumentUncheckedCreateWithoutLegalAcceptancesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => LegalDocumentCreateOrConnectWithoutLegalAcceptancesInputObjectSchema).optional(),
  connect: z.lazy(() => LegalDocumentWhereUniqueInputObjectSchema).optional()
}).strict();
export const LegalDocumentCreateNestedOneWithoutLegalAcceptancesInputObjectSchema: z.ZodType<Prisma.LegalDocumentCreateNestedOneWithoutLegalAcceptancesInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalDocumentCreateNestedOneWithoutLegalAcceptancesInput>;
export const LegalDocumentCreateNestedOneWithoutLegalAcceptancesInputObjectZodSchema = makeSchema();
