import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  held: SortOrderSchema.optional(),
  balance: SortOrderSchema.optional()
}).strict();
export const WalletSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WalletSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletSumOrderByAggregateInput>;
export const WalletSumOrderByAggregateInputObjectZodSchema = makeSchema();
