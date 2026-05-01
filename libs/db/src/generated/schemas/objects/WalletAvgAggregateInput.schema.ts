import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  held: z.literal(true).optional(),
  balance: z.literal(true).optional()
}).strict();
export const WalletAvgAggregateInputObjectSchema: z.ZodType<Prisma.WalletAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WalletAvgAggregateInputType>;
export const WalletAvgAggregateInputObjectZodSchema = makeSchema();
