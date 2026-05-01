import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientTypeCreateNestedOneWithoutSessionsInputObjectSchema as ClientTypeCreateNestedOneWithoutSessionsInputObjectSchema } from './ClientTypeCreateNestedOneWithoutSessionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  userAgentHash: z.string(),
  refreshTokenJti: z.string(),
  accessTokenJti: z.string(),
  refreshTokenHash: z.string(),
  createdAt: z.coerce.date().optional(),
  clientType: z.lazy(() => ClientTypeCreateNestedOneWithoutSessionsInputObjectSchema)
}).strict();
export const SessionCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.SessionCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionCreateWithoutUserInput>;
export const SessionCreateWithoutUserInputObjectZodSchema = makeSchema();
