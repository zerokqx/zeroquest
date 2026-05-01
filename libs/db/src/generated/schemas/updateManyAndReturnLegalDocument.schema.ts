import type { Prisma } from '../client';
import * as z from 'zod';
import { LegalDocumentSelectObjectSchema as LegalDocumentSelectObjectSchema } from './objects/LegalDocumentSelect.schema';
import { LegalDocumentUpdateManyMutationInputObjectSchema as LegalDocumentUpdateManyMutationInputObjectSchema } from './objects/LegalDocumentUpdateManyMutationInput.schema';
import { LegalDocumentWhereInputObjectSchema as LegalDocumentWhereInputObjectSchema } from './objects/LegalDocumentWhereInput.schema';

export const LegalDocumentUpdateManyAndReturnSchema: z.ZodType<Prisma.LegalDocumentUpdateManyAndReturnArgs> = z.object({ select: LegalDocumentSelectObjectSchema.optional(), data: LegalDocumentUpdateManyMutationInputObjectSchema, where: LegalDocumentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LegalDocumentUpdateManyAndReturnArgs>;

export const LegalDocumentUpdateManyAndReturnZodSchema = z.object({ select: LegalDocumentSelectObjectSchema.optional(), data: LegalDocumentUpdateManyMutationInputObjectSchema, where: LegalDocumentWhereInputObjectSchema.optional() }).strict();