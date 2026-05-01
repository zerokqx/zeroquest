import * as z from 'zod';
import type { Prisma } from '../../client';
import { PaymentWhereInputObjectSchema as PaymentWhereInputObjectSchema } from './PaymentWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PaymentWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountPaymentsArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountPaymentsArgsObjectZodSchema = makeSchema();
