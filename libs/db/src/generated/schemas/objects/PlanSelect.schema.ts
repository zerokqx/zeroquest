import * as z from 'zod';
import type { Prisma } from '../../client';
import { PaymentFindManySchema as PaymentFindManySchema } from '../findManyPayment.schema';
import { SubscribeFindManySchema as SubscribeFindManySchema } from '../findManySubscribe.schema';
import { InboundArgsObjectSchema as InboundArgsObjectSchema } from './InboundArgs.schema';
import { PlanCountOutputTypeArgsObjectSchema as PlanCountOutputTypeArgsObjectSchema } from './PlanCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  isSpecial: z.boolean().optional(),
  discountedPercent: z.boolean().optional(),
  features: z.boolean().optional(),
  price: z.boolean().optional(),
  description: z.boolean().optional(),
  totalGb: z.boolean().optional(),
  payments: z.union([z.boolean(), z.lazy(() => PaymentFindManySchema)]).optional(),
  subscribes: z.union([z.boolean(), z.lazy(() => SubscribeFindManySchema)]).optional(),
  inbound: z.union([z.boolean(), z.lazy(() => InboundArgsObjectSchema)]).optional(),
  inboundId: z.boolean().optional(),
  duratationDays: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => PlanCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const PlanSelectObjectSchema: z.ZodType<Prisma.PlanSelect> = makeSchema() as unknown as z.ZodType<Prisma.PlanSelect>;
export const PlanSelectObjectZodSchema = makeSchema();
