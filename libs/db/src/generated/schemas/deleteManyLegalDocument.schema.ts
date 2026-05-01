import type { Prisma } from '../client';
import * as z from 'zod';
import { LegalDocumentWhereInputObjectSchema as LegalDocumentWhereInputObjectSchema } from './objects/LegalDocumentWhereInput.schema';

export const LegalDocumentDeleteManySchema: z.ZodType<Prisma.LegalDocumentDeleteManyArgs> = z.object({ where: LegalDocumentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LegalDocumentDeleteManyArgs>;

export const LegalDocumentDeleteManyZodSchema = z.object({ where: LegalDocumentWhereInputObjectSchema.optional() }).strict();