import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ClientTypeCreateWithoutSessionsInputObjectSchema: z.ZodType<Prisma.ClientTypeCreateWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientTypeCreateWithoutSessionsInput>;
export const ClientTypeCreateWithoutSessionsInputObjectZodSchema = makeSchema();
