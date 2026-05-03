import * as z from 'zod';
import type { Prisma } from '../../client';
import { SessionCreateManyIpInputObjectSchema as SessionCreateManyIpInputObjectSchema } from './SessionCreateManyIpInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SessionCreateManyIpInputObjectSchema), z.lazy(() => SessionCreateManyIpInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SessionCreateManyIpInputEnvelopeObjectSchema: z.ZodType<Prisma.SessionCreateManyIpInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SessionCreateManyIpInputEnvelope>;
export const SessionCreateManyIpInputEnvelopeObjectZodSchema = makeSchema();
