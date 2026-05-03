import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userAgentHash: z.string(),
  clientTypeId: z.number().int(),
  refreshTokenJti: z.string(),
  accessTokenJti: z.string(),
  refreshTokenHash: z.string(),
  expriesAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  userId: z.string()
}).strict();
export const SessionCreateManyIpInputObjectSchema: z.ZodType<Prisma.SessionCreateManyIpInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionCreateManyIpInput>;
export const SessionCreateManyIpInputObjectZodSchema = makeSchema();
