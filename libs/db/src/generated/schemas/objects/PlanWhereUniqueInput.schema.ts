import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().optional()
}).strict();
export const PlanWhereUniqueInputObjectSchema: z.ZodType<Prisma.PlanWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanWhereUniqueInput>;
export const PlanWhereUniqueInputObjectZodSchema = makeSchema();
