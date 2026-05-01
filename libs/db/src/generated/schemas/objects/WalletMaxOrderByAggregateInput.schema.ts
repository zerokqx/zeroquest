import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  held: SortOrderSchema.optional(),
  balance: SortOrderSchema.optional()
}).strict();
export const WalletMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.WalletMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletMaxOrderByAggregateInput>;
export const WalletMaxOrderByAggregateInputObjectZodSchema = makeSchema();
