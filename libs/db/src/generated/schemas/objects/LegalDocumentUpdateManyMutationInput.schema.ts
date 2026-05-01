import * as z from 'zod';
import type { Prisma } from '../../client';
import { LegalDocumentTypeSchema } from '../enums/LegalDocumentType.schema';
import { EnumLegalDocumentTypeFieldUpdateOperationsInputObjectSchema as EnumLegalDocumentTypeFieldUpdateOperationsInputObjectSchema } from './EnumLegalDocumentTypeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  type: z.union([LegalDocumentTypeSchema, z.lazy(() => EnumLegalDocumentTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  version: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const LegalDocumentUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.LegalDocumentUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalDocumentUpdateManyMutationInput>;
export const LegalDocumentUpdateManyMutationInputObjectZodSchema = makeSchema();
