import * as z from 'zod';
import type { Prisma } from '../../client';
import { PaymentCreateManyUserInputObjectSchema as PaymentCreateManyUserInputObjectSchema } from './PaymentCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => PaymentCreateManyUserInputObjectSchema), z.lazy(() => PaymentCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const PaymentCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.PaymentCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.PaymentCreateManyUserInputEnvelope>;
export const PaymentCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
