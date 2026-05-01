import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  inboundId: z.number().int().optional()
}).strict();
export const InboundWhereUniqueInputObjectSchema: z.ZodType<Prisma.InboundWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.InboundWhereUniqueInput>;
export const InboundWhereUniqueInputObjectZodSchema = makeSchema();
