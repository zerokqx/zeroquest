import type { Prisma } from '../client';
import * as z from 'zod';
import { LegalDocumentSelectObjectSchema as LegalDocumentSelectObjectSchema } from './objects/LegalDocumentSelect.schema';
import { LegalDocumentIncludeObjectSchema as LegalDocumentIncludeObjectSchema } from './objects/LegalDocumentInclude.schema';
import { LegalDocumentWhereUniqueInputObjectSchema as LegalDocumentWhereUniqueInputObjectSchema } from './objects/LegalDocumentWhereUniqueInput.schema';
import { LegalDocumentCreateInputObjectSchema as LegalDocumentCreateInputObjectSchema } from './objects/LegalDocumentCreateInput.schema';
import { LegalDocumentUncheckedCreateInputObjectSchema as LegalDocumentUncheckedCreateInputObjectSchema } from './objects/LegalDocumentUncheckedCreateInput.schema';
import { LegalDocumentUpdateInputObjectSchema as LegalDocumentUpdateInputObjectSchema } from './objects/LegalDocumentUpdateInput.schema';
import { LegalDocumentUncheckedUpdateInputObjectSchema as LegalDocumentUncheckedUpdateInputObjectSchema } from './objects/LegalDocumentUncheckedUpdateInput.schema';

export const LegalDocumentUpsertOneSchema: z.ZodType<Prisma.LegalDocumentUpsertArgs> = z.object({ select: LegalDocumentSelectObjectSchema.optional(), include: LegalDocumentIncludeObjectSchema.optional(), where: LegalDocumentWhereUniqueInputObjectSchema, create: z.union([ LegalDocumentCreateInputObjectSchema, LegalDocumentUncheckedCreateInputObjectSchema ]), update: z.union([ LegalDocumentUpdateInputObjectSchema, LegalDocumentUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.LegalDocumentUpsertArgs>;

export const LegalDocumentUpsertOneZodSchema = z.object({ select: LegalDocumentSelectObjectSchema.optional(), include: LegalDocumentIncludeObjectSchema.optional(), where: LegalDocumentWhereUniqueInputObjectSchema, create: z.union([ LegalDocumentCreateInputObjectSchema, LegalDocumentUncheckedCreateInputObjectSchema ]), update: z.union([ LegalDocumentUpdateInputObjectSchema, LegalDocumentUncheckedUpdateInputObjectSchema ]) }).strict();