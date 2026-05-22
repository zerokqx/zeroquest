import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  enabled: z.literal(true).optional(),
  ciphertext: z.literal(true).optional(),
  iv: z.literal(true).optional(),
  authTag: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TotpMfaCountAggregateInputObjectSchema: z.ZodType<Prisma.TotpMfaCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TotpMfaCountAggregateInputType>;
export const TotpMfaCountAggregateInputObjectZodSchema = makeSchema();
