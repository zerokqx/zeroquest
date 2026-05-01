import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  amount: z.literal(true).optional(),
  balance: z.literal(true).optional()
}).strict();
export const WalletHistorySumAggregateInputObjectSchema: z.ZodType<Prisma.WalletHistorySumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WalletHistorySumAggregateInputType>;
export const WalletHistorySumAggregateInputObjectZodSchema = makeSchema();
