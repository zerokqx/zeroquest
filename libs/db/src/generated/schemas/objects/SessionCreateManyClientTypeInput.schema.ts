import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userAgentHash: z.string(),
  refreshTokenJti: z.string(),
  accessTokenJti: z.string(),
  refreshTokenHash: z.string(),
  createdAt: z.coerce.date().optional(),
  userId: z.string()
}).strict();
export const SessionCreateManyClientTypeInputObjectSchema: z.ZodType<Prisma.SessionCreateManyClientTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionCreateManyClientTypeInput>;
export const SessionCreateManyClientTypeInputObjectZodSchema = makeSchema();
