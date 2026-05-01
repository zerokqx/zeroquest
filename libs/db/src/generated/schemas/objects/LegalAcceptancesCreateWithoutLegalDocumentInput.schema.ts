import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserCreateNestedOneWithoutLegalAcceptancesInputObjectSchema as UserCreateNestedOneWithoutLegalAcceptancesInputObjectSchema } from './UserCreateNestedOneWithoutLegalAcceptancesInput.schema'

const makeSchema = () => z.object({
  user: z.lazy(() => UserCreateNestedOneWithoutLegalAcceptancesInputObjectSchema)
}).strict();
export const LegalAcceptancesCreateWithoutLegalDocumentInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesCreateWithoutLegalDocumentInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesCreateWithoutLegalDocumentInput>;
export const LegalAcceptancesCreateWithoutLegalDocumentInputObjectZodSchema = makeSchema();
