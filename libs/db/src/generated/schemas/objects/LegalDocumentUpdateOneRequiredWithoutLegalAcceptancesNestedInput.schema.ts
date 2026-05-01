import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalDocumentCreateWithoutLegalAcceptancesInputObjectSchema as LegalDocumentCreateWithoutLegalAcceptancesInputObjectSchema } from './LegalDocumentCreateWithoutLegalAcceptancesInput.schema';
import { LegalDocumentUncheckedCreateWithoutLegalAcceptancesInputObjectSchema as LegalDocumentUncheckedCreateWithoutLegalAcceptancesInputObjectSchema } from './LegalDocumentUncheckedCreateWithoutLegalAcceptancesInput.schema';
import { LegalDocumentCreateOrConnectWithoutLegalAcceptancesInputObjectSchema as LegalDocumentCreateOrConnectWithoutLegalAcceptancesInputObjectSchema } from './LegalDocumentCreateOrConnectWithoutLegalAcceptancesInput.schema';
import { LegalDocumentUpsertWithoutLegalAcceptancesInputObjectSchema as LegalDocumentUpsertWithoutLegalAcceptancesInputObjectSchema } from './LegalDocumentUpsertWithoutLegalAcceptancesInput.schema';
import { LegalDocumentWhereUniqueInputObjectSchema as LegalDocumentWhereUniqueInputObjectSchema } from './LegalDocumentWhereUniqueInput.schema';
import { LegalDocumentUpdateToOneWithWhereWithoutLegalAcceptancesInputObjectSchema as LegalDocumentUpdateToOneWithWhereWithoutLegalAcceptancesInputObjectSchema } from './LegalDocumentUpdateToOneWithWhereWithoutLegalAcceptancesInput.schema';
import { LegalDocumentUpdateWithoutLegalAcceptancesInputObjectSchema as LegalDocumentUpdateWithoutLegalAcceptancesInputObjectSchema } from './LegalDocumentUpdateWithoutLegalAcceptancesInput.schema';
import { LegalDocumentUncheckedUpdateWithoutLegalAcceptancesInputObjectSchema as LegalDocumentUncheckedUpdateWithoutLegalAcceptancesInputObjectSchema } from './LegalDocumentUncheckedUpdateWithoutLegalAcceptancesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LegalDocumentCreateWithoutLegalAcceptancesInputObjectSchema), z.lazy(() => LegalDocumentUncheckedCreateWithoutLegalAcceptancesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => LegalDocumentCreateOrConnectWithoutLegalAcceptancesInputObjectSchema).optional(),
  upsert: z.lazy(() => LegalDocumentUpsertWithoutLegalAcceptancesInputObjectSchema).optional(),
  connect: z.lazy(() => LegalDocumentWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => LegalDocumentUpdateToOneWithWhereWithoutLegalAcceptancesInputObjectSchema), z.lazy(() => LegalDocumentUpdateWithoutLegalAcceptancesInputObjectSchema), z.lazy(() => LegalDocumentUncheckedUpdateWithoutLegalAcceptancesInputObjectSchema)]).optional()
}).strict();
export const LegalDocumentUpdateOneRequiredWithoutLegalAcceptancesNestedInputObjectSchema: z.ZodType<Prisma.LegalDocumentUpdateOneRequiredWithoutLegalAcceptancesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalDocumentUpdateOneRequiredWithoutLegalAcceptancesNestedInput>;
export const LegalDocumentUpdateOneRequiredWithoutLegalAcceptancesNestedInputObjectZodSchema = makeSchema();
