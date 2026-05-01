import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalDocumentTypeSchema } from '../enums/LegalDocumentType.schema'

const makeSchema = () => z.object({
  set: LegalDocumentTypeSchema.optional()
}).strict();
export const EnumLegalDocumentTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumLegalDocumentTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumLegalDocumentTypeFieldUpdateOperationsInput>;
export const EnumLegalDocumentTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
