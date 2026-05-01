import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const legalacceptancesscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => LegalAcceptancesScalarWhereInputObjectSchema), z.lazy(() => LegalAcceptancesScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LegalAcceptancesScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LegalAcceptancesScalarWhereInputObjectSchema), z.lazy(() => LegalAcceptancesScalarWhereInputObjectSchema).array()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  legalDocumentId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const LegalAcceptancesScalarWhereInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesScalarWhereInput> = legalacceptancesscalarwhereinputSchema as unknown as z.ZodType<Prisma.LegalAcceptancesScalarWhereInput>;
export const LegalAcceptancesScalarWhereInputObjectZodSchema = legalacceptancesscalarwhereinputSchema;
