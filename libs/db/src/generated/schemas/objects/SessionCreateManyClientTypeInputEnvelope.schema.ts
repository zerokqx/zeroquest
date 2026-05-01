import * as z from 'zod';
import type { Prisma } from '../../client';
import { SessionCreateManyClientTypeInputObjectSchema as SessionCreateManyClientTypeInputObjectSchema } from './SessionCreateManyClientTypeInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SessionCreateManyClientTypeInputObjectSchema), z.lazy(() => SessionCreateManyClientTypeInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SessionCreateManyClientTypeInputEnvelopeObjectSchema: z.ZodType<Prisma.SessionCreateManyClientTypeInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SessionCreateManyClientTypeInputEnvelope>;
export const SessionCreateManyClientTypeInputEnvelopeObjectZodSchema = makeSchema();
