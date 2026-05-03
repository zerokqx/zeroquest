import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ClientTypeOrderByWithRelationInputObjectSchema as ClientTypeOrderByWithRelationInputObjectSchema } from './ClientTypeOrderByWithRelationInput.schema';
import { IpOrderByWithRelationInputObjectSchema as IpOrderByWithRelationInputObjectSchema } from './IpOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userAgentHash: SortOrderSchema.optional(),
  clientTypeId: SortOrderSchema.optional(),
  refreshTokenJti: SortOrderSchema.optional(),
  accessTokenJti: SortOrderSchema.optional(),
  refreshTokenHash: SortOrderSchema.optional(),
  expriesAt: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  ipId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  clientType: z.lazy(() => ClientTypeOrderByWithRelationInputObjectSchema).optional(),
  ip: z.lazy(() => IpOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const SessionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SessionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionOrderByWithRelationInput>;
export const SessionOrderByWithRelationInputObjectZodSchema = makeSchema();
