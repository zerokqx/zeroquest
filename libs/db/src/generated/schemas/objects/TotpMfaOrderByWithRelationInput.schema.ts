import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  enabled: SortOrderSchema.optional(),
  ciphertext: SortOrderSchema.optional(),
  iv: SortOrderSchema.optional(),
  authTag: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const TotpMfaOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TotpMfaOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TotpMfaOrderByWithRelationInput>;
export const TotpMfaOrderByWithRelationInputObjectZodSchema = makeSchema();
