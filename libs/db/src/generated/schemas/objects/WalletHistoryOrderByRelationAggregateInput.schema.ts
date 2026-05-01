import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const WalletHistoryOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.WalletHistoryOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletHistoryOrderByRelationAggregateInput>;
export const WalletHistoryOrderByRelationAggregateInputObjectZodSchema = makeSchema();
