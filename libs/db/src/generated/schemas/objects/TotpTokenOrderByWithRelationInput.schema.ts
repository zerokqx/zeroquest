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
export const TotpTokenOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TotpTokenOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TotpTokenOrderByWithRelationInput>;
export const TotpTokenOrderByWithRelationInputObjectZodSchema = makeSchema();
