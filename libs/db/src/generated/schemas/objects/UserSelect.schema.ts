import * as z from 'zod';
import type { Prisma } from '../../client';
import { SubscribeFindManySchema as SubscribeFindManySchema } from '../findManySubscribe.schema';
import { PaymentFindManySchema as PaymentFindManySchema } from '../findManyPayment.schema';
import { ReviewArgsObjectSchema as ReviewArgsObjectSchema } from './ReviewArgs.schema';
import { WalletArgsObjectSchema as WalletArgsObjectSchema } from './WalletArgs.schema';
import { LegalAcceptancesFindManySchema as LegalAcceptancesFindManySchema } from '../findManyLegalAcceptances.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  login: z.boolean().optional(),
  telegramId: z.boolean().optional(),
  passwordHash: z.boolean().optional(),
  subscribes: z.union([z.boolean(), z.lazy(() => SubscribeFindManySchema)]).optional(),
  isBanned: z.boolean().optional(),
  role: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  payments: z.union([z.boolean(), z.lazy(() => PaymentFindManySchema)]).optional(),
  review: z.union([z.boolean(), z.lazy(() => ReviewArgsObjectSchema)]).optional(),
  canComment: z.boolean().optional(),
  wallet: z.union([z.boolean(), z.lazy(() => WalletArgsObjectSchema)]).optional(),
  walletId: z.boolean().optional(),
  legalAcceptances: z.union([z.boolean(), z.lazy(() => LegalAcceptancesFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserSelectObjectSchema: z.ZodType<Prisma.UserSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectZodSchema = makeSchema();
