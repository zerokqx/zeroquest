import * as z from 'zod';
import type { Prisma } from '../../client';
import { PaymentCreateManyPlanInputObjectSchema as PaymentCreateManyPlanInputObjectSchema } from './PaymentCreateManyPlanInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PaymentCreateManyPlanInputObjectSchema), z.lazy(() => PaymentCreateManyPlanInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PaymentCreateManyPlanInputEnvelopeObjectSchema: z.ZodType<Prisma.PaymentCreateManyPlanInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PaymentCreateManyPlanInputEnvelope>;
export const PaymentCreateManyPlanInputEnvelopeObjectZodSchema = makeSchema();
