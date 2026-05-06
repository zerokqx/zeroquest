import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  name: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ClientTypeCreateInputObjectSchema: z.ZodType<Prisma.ClientTypeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientTypeCreateInput>;
export const ClientTypeCreateInputObjectZodSchema = makeSchema();
