import * as z from 'zod';
import type { Prisma } from '../../client';
import { PaymentIdUserIdCompoundUniqueInputObjectSchema as PaymentIdUserIdCompoundUniqueInputObjectSchema } from './PaymentIdUserIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  providerPaymentId: z.string().optional(),
  idempotenceKey: z.string().optional(),
  id_userId: z.lazy(() => PaymentIdUserIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const PaymentWhereUniqueInputObjectSchema: z.ZodType<Prisma.PaymentWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.PaymentWhereUniqueInput>;
export const PaymentWhereUniqueInputObjectZodSchema = makeSchema();
