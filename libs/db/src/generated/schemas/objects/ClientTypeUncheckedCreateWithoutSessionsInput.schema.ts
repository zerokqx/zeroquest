import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ClientTypeUncheckedCreateWithoutSessionsInputObjectSchema: z.ZodType<Prisma.ClientTypeUncheckedCreateWithoutSessionsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientTypeUncheckedCreateWithoutSessionsInput>;
export const ClientTypeUncheckedCreateWithoutSessionsInputObjectZodSchema = makeSchema();
