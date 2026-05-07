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
  userId: z.literal(true).optional()
}).strict();
export const TotpTokenMinAggregateInputObjectSchema: z.ZodType<Prisma.TotpTokenMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TotpTokenMinAggregateInputType>;
export const TotpTokenMinAggregateInputObjectZodSchema = makeSchema();
