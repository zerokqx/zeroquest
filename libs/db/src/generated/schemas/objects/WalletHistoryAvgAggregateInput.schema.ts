import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  amount: z.literal(true).optional(),
  balance: z.literal(true).optional()
}).strict();
export const WalletHistoryAvgAggregateInputObjectSchema: z.ZodType<Prisma.WalletHistoryAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WalletHistoryAvgAggregateInputType>;
export const WalletHistoryAvgAggregateInputObjectZodSchema = makeSchema();
