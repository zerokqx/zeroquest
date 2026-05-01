import type { Prisma } from '../client';
import * as z from 'zod';
import { LegalDocumentCreateManyInputObjectSchema as LegalDocumentCreateManyInputObjectSchema } from './objects/LegalDocumentCreateManyInput.schema';

export const LegalDocumentCreateManySchema: z.ZodType<Prisma.LegalDocumentCreateManyArgs> = z.object({ data: z.union([ LegalDocumentCreateManyInputObjectSchema, z.array(LegalDocumentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.LegalDocumentCreateManyArgs>;

export const LegalDocumentCreateManyZodSchema = z.object({ data: z.union([ LegalDocumentCreateManyInputObjectSchema, z.array(LegalDocumentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();