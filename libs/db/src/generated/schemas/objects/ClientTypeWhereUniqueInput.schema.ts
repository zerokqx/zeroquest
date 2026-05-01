import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().optional()
}).strict();
export const ClientTypeWhereUniqueInputObjectSchema: z.ZodType<Prisma.ClientTypeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientTypeWhereUniqueInput>;
export const ClientTypeWhereUniqueInputObjectZodSchema = makeSchema();
