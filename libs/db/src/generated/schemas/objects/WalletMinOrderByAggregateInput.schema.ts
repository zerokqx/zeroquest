import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  held: SortOrderSchema.optional(),
  balance: SortOrderSchema.optional()
}).strict();
export const WalletMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WalletMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletMinOrderByAggregateInput>;
export const WalletMinOrderByAggregateInputObjectZodSchema = makeSchema();
