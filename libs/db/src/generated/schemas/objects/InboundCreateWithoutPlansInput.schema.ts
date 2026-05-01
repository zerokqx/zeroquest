import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  enable: z.boolean().optional(),
  name: z.string(),
  inboundId: z.number().int()
}).strict();
export const InboundCreateWithoutPlansInputObjectSchema: z.ZodType<Prisma.InboundCreateWithoutPlansInput> = makeSchema() as unknown as z.ZodType<Prisma.InboundCreateWithoutPlansInput>;
export const InboundCreateWithoutPlansInputObjectZodSchema = makeSchema();
