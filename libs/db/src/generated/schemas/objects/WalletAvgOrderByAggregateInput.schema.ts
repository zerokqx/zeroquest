import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  held: SortOrderSchema.optional(),
  balance: SortOrderSchema.optional()
}).strict();
export const WalletAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WalletAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletAvgOrderByAggregateInput>;
export const WalletAvgOrderByAggregateInputObjectZodSchema = makeSchema();
