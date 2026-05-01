import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const LegalDocumentWhereUniqueInputObjectSchema: z.ZodType<Prisma.LegalDocumentWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalDocumentWhereUniqueInput>;
export const LegalDocumentWhereUniqueInputObjectZodSchema = makeSchema();
