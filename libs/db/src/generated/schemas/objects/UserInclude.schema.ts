import * as z from 'zod';
import type { Prisma } from '../../client';
import { SubscribeFindManySchema as SubscribeFindManySchema } from '../findManySubscribe.schema';
import { PaymentFindManySchema as PaymentFindManySchema } from '../findManyPayment.schema';
import { ReviewArgsObjectSchema as ReviewArgsObjectSchema } from './ReviewArgs.schema';
import { WalletArgsObjectSchema as WalletArgsObjectSchema } from './WalletArgs.schema';
import { LegalAcceptancesFindManySchema as LegalAcceptancesFindManySchema } from '../findManyLegalAcceptances.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  subscribes: z.union([z.boolean(), z.lazy(() => SubscribeFindManySchema)]).optional(),
  payments: z.union([z.boolean(), z.lazy(() => PaymentFindManySchema)]).optional(),
  review: z.union([z.boolean(), z.lazy(() => ReviewArgsObjectSchema)]).optional(),
  wallet: z.union([z.boolean(), z.lazy(() => WalletArgsObjectSchema)]).optional(),
  legalAcceptances: z.union([z.boolean(), z.lazy(() => LegalAcceptancesFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectZodSchema = makeSchema();
