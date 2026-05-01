import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  held: z.literal(true).optional(),
  balance: z.literal(true).optional()
}).strict();
export const WalletMaxAggregateInputObjectSchema: z.ZodType<Prisma.WalletMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WalletMaxAggregateInputType>;
export const WalletMaxAggregateInputObjectZodSchema = makeSchema();
