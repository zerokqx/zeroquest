import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserCreateNestedOneWithoutSessionsInputObjectSchema as UserCreateNestedOneWithoutSessionsInputObjectSchema } from './UserCreateNestedOneWithoutSessionsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  userAgentHash: z.string(),
  refreshTokenJti: z.string(),
  accessTokenJti: z.string(),
  refreshTokenHash: z.string(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputObjectSchema)
}).strict();
export const SessionCreateWithoutClientTypeInputObjectSchema: z.ZodType<Prisma.SessionCreateWithoutClientTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionCreateWithoutClientTypeInput>;
export const SessionCreateWithoutClientTypeInputObjectZodSchema = makeSchema();
