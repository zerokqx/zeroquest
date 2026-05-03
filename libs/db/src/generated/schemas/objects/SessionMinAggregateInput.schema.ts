import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userAgentHash: z.literal(true).optional(),
  clientTypeId: z.literal(true).optional(),
  refreshTokenJti: z.literal(true).optional(),
  accessTokenJti: z.literal(true).optional(),
  refreshTokenHash: z.literal(true).optional(),
  expriesAt: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  ipId: z.literal(true).optional()
}).strict();
export const SessionMinAggregateInputObjectSchema: z.ZodType<Prisma.SessionMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SessionMinAggregateInputType>;
export const SessionMinAggregateInputObjectZodSchema = makeSchema();
