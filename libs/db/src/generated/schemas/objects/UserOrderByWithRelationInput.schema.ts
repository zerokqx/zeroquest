import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SubscribeOrderByRelationAggregateInputObjectSchema as SubscribeOrderByRelationAggregateInputObjectSchema } from './SubscribeOrderByRelationAggregateInput.schema';
import { PaymentOrderByRelationAggregateInputObjectSchema as PaymentOrderByRelationAggregateInputObjectSchema } from './PaymentOrderByRelationAggregateInput.schema';
import { SessionOrderByRelationAggregateInputObjectSchema as SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema';
import { ReviewOrderByWithRelationInputObjectSchema as ReviewOrderByWithRelationInputObjectSchema } from './ReviewOrderByWithRelationInput.schema';
import { WalletOrderByWithRelationInputObjectSchema as WalletOrderByWithRelationInputObjectSchema } from './WalletOrderByWithRelationInput.schema';
import { LegalAcceptancesOrderByRelationAggregateInputObjectSchema as LegalAcceptancesOrderByRelationAggregateInputObjectSchema } from './LegalAcceptancesOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  login: SortOrderSchema.optional(),
  telegramId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  passwordHash: SortOrderSchema.optional(),
  isBanned: SortOrderSchema.optional(),
  role: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  canComment: SortOrderSchema.optional(),
  walletId: SortOrderSchema.optional(),
  subscribes: z.lazy(() => SubscribeOrderByRelationAggregateInputObjectSchema).optional(),
  payments: z.lazy(() => PaymentOrderByRelationAggregateInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputObjectSchema).optional(),
  review: z.lazy(() => ReviewOrderByWithRelationInputObjectSchema).optional(),
  wallet: z.lazy(() => WalletOrderByWithRelationInputObjectSchema).optional(),
  legalAcceptances: z.lazy(() => LegalAcceptancesOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectZodSchema = makeSchema();
