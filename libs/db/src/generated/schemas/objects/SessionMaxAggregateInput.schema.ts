import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userAgentHash: z.literal(true).optional(),
  clientTypeId: z.literal(true).optional(),
  refreshTokenJti: z.literal(true).optional(),
  accessTokenJti: z.literal(true).optional(),
  refreshTokenHash: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  userId: z.literal(true).optional()
}).strict();
export const SessionMaxAggregateInputObjectSchema: z.ZodType<Prisma.SessionMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SessionMaxAggregateInputType>;
export const SessionMaxAggregateInputObjectZodSchema = makeSchema();
