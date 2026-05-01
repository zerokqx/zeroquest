import type { Prisma } from '../client';
import * as z from 'zod';
import { LegalDocumentUpdateManyMutationInputObjectSchema as LegalDocumentUpdateManyMutationInputObjectSchema } from './objects/LegalDocumentUpdateManyMutationInput.schema';
import { LegalDocumentWhereInputObjectSchema as LegalDocumentWhereInputObjectSchema } from './objects/LegalDocumentWhereInput.schema';

export const LegalDocumentUpdateManySchema: z.ZodType<Prisma.LegalDocumentUpdateManyArgs> = z.object({ data: LegalDocumentUpdateManyMutationInputObjectSchema, where: LegalDocumentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LegalDocumentUpdateManyArgs>;

export const LegalDocumentUpdateManyZodSchema = z.object({ data: LegalDocumentUpdateManyMutationInputObjectSchema, where: LegalDocumentWhereInputObjectSchema.optional() }).strict();