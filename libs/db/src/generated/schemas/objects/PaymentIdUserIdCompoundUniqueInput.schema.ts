import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.number().int(),
  userId: z.string()
}).strict();
export const PaymentIdUserIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.PaymentIdUserIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentIdUserIdCompoundUniqueInput>;
export const PaymentIdUserIdCompoundUniqueInputObjectZodSchema = makeSchema();
