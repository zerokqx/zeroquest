import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  held: z.literal(true).optional(),
  balance: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const WalletCountAggregateInputObjectSchema: z.ZodType<Prisma.WalletCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WalletCountAggregateInputType>;
export const WalletCountAggregateInputObjectZodSchema = makeSchema();
