import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const ClientTypeSelectObjectSchema: z.ZodType<Prisma.ClientTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ClientTypeSelect>;
export const ClientTypeSelectObjectZodSchema = makeSchema();
