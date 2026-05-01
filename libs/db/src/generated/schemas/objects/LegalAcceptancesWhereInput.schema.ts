import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { LegalDocumentScalarRelationFilterObjectSchema as LegalDocumentScalarRelationFilterObjectSchema } from './LegalDocumentScalarRelationFilter.schema';
import { LegalDocumentWhereInputObjectSchema as LegalDocumentWhereInputObjectSchema } from './LegalDocumentWhereInput.schema'

const legalacceptanceswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => LegalAcceptancesWhereInputObjectSchema), z.lazy(() => LegalAcceptancesWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => LegalAcceptancesWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => LegalAcceptancesWhereInputObjectSchema), z.lazy(() => LegalAcceptancesWhereInputObjectSchema).array()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  legalDocumentId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  legalDocument: z.union([z.lazy(() => LegalDocumentScalarRelationFilterObjectSchema), z.lazy(() => LegalDocumentWhereInputObjectSchema)]).optional()
}).strict();
export const LegalAcceptancesWhereInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesWhereInput> = legalacceptanceswhereinputSchema as unknown as z.ZodType<Prisma.LegalAcceptancesWhereInput>;
export const LegalAcceptancesWhereInputObjectZodSchema = legalacceptanceswhereinputSchema;
