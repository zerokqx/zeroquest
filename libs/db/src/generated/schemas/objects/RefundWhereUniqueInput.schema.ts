import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  paymentId: z.number().int().optional()
}).strict();
export const RefundWhereUniqueInputObjectSchema: z.ZodType<Prisma.RefundWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.RefundWhereUniqueInput>;
export const RefundWhereUniqueInputObjectZodSchema = makeSchema();
