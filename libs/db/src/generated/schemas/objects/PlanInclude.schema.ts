import * as z from 'zod';
import type { Prisma } from '../../client';
import { PaymentFindManySchema as PaymentFindManySchema } from '../findManyPayment.schema';
import { SubscribeFindManySchema as SubscribeFindManySchema } from '../findManySubscribe.schema';
import { InboundArgsObjectSchema as InboundArgsObjectSchema } from './InboundArgs.schema';
import { PlanCountOutputTypeArgsObjectSchema as PlanCountOutputTypeArgsObjectSchema } from './PlanCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  payments: z.union([z.boolean(), z.lazy(() => PaymentFindManySchema)]).optional(),
  subscribes: z.union([z.boolean(), z.lazy(() => SubscribeFindManySchema)]).optional(),
  inbound: z.union([z.boolean(), z.lazy(() => InboundArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => PlanCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const PlanIncludeObjectSchema: z.ZodType<Prisma.PlanInclude> = makeSchema() as unknown as z.ZodType<Prisma.PlanInclude>;
export const PlanIncludeObjectZodSchema = makeSchema();
