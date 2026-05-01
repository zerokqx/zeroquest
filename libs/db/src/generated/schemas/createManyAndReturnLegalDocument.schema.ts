import type { Prisma } from '../client';
import * as z from 'zod';
import { LegalDocumentSelectObjectSchema as LegalDocumentSelectObjectSchema } from './objects/LegalDocumentSelect.schema';
import { LegalDocumentCreateManyInputObjectSchema as LegalDocumentCreateManyInputObjectSchema } from './objects/LegalDocumentCreateManyInput.schema';

export const LegalDocumentCreateManyAndReturnSchema: z.ZodType<Prisma.LegalDocumentCreateManyAndReturnArgs> = z.object({ select: LegalDocumentSelectObjectSchema.optional(), data: z.union([ LegalDocumentCreateManyInputObjectSchema, z.array(LegalDocumentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.LegalDocumentCreateManyAndReturnArgs>;

export const LegalDocumentCreateManyAndReturnZodSchema = z.object({ select: LegalDocumentSelectObjectSchema.optional(), data: z.union([ LegalDocumentCreateManyInputObjectSchema, z.array(LegalDocumentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();