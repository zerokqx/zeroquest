import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { PlanOrderByWithRelationInputObjectSchema as PlanOrderByWithRelationInputObjectSchema } from './PlanOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  vlessLink: SortOrderSchema.optional(),
  vlessClientId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  nextPaymentDate: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  planId: SortOrderSchema.optional(),
  totalGb: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  plan: z.lazy(() => PlanOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const SubscribeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SubscribeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeOrderByWithRelationInput>;
export const SubscribeOrderByWithRelationInputObjectZodSchema = makeSchema();
