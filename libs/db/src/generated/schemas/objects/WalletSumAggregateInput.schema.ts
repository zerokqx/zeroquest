import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  held: z.literal(true).optional(),
  balance: z.literal(true).optional()
}).strict();
export const WalletSumAggregateInputObjectSchema: z.ZodType<Prisma.WalletSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WalletSumAggregateInputType>;
export const WalletSumAggregateInputObjectZodSchema = makeSchema();
