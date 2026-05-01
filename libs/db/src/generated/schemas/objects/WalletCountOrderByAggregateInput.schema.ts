import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  held: SortOrderSchema.optional(),
  balance: SortOrderSchema.optional()
}).strict();
export const WalletCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WalletCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletCountOrderByAggregateInput>;
export const WalletCountOrderByAggregateInputObjectZodSchema = makeSchema();
