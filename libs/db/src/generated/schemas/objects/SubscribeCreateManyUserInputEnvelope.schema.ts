import * as z from 'zod';
import type { Prisma } from '../../client';
import { SubscribeCreateManyUserInputObjectSchema as SubscribeCreateManyUserInputObjectSchema } from './SubscribeCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SubscribeCreateManyUserInputObjectSchema), z.lazy(() => SubscribeCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SubscribeCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.SubscribeCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeCreateManyUserInputEnvelope>;
export const SubscribeCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
