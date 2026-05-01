import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PaymentOrderByRelationAggregateInputObjectSchema as PaymentOrderByRelationAggregateInputObjectSchema } from './PaymentOrderByRelationAggregateInput.schema';
import { SubscribeOrderByRelationAggregateInputObjectSchema as SubscribeOrderByRelationAggregateInputObjectSchema } from './SubscribeOrderByRelationAggregateInput.schema';
import { InboundOrderByWithRelationInputObjectSchema as InboundOrderByWithRelationInputObjectSchema } from './InboundOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  isSpecial: SortOrderSchema.optional(),
  discountedPercent: SortOrderSchema.optional(),
  features: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  price: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  totalGb: SortOrderSchema.optional(),
  inboundId: SortOrderSchema.optional(),
  duratationDays: SortOrderSchema.optional(),
  payments: z.lazy(() => PaymentOrderByRelationAggregateInputObjectSchema).optional(),
  subscribes: z.lazy(() => SubscribeOrderByRelationAggregateInputObjectSchema).optional(),
  inbound: z.lazy(() => InboundOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const PlanOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PlanOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.PlanOrderByWithRelationInput>;
export const PlanOrderByWithRelationInputObjectZodSchema = makeSchema();
