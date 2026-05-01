import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  enable: z.boolean().optional(),
  name: z.string(),
  inboundId: z.number().int()
}).strict();
export const InboundUncheckedCreateWithoutPlansInputObjectSchema: z.ZodType<Prisma.InboundUncheckedCreateWithoutPlansInput> = makeSchema() as unknown as z.ZodType<Prisma.InboundUncheckedCreateWithoutPlansInput>;
export const InboundUncheckedCreateWithoutPlansInputObjectZodSchema = makeSchema();
