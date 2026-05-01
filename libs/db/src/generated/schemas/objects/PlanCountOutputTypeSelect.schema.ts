import * as z from 'zod';
import type { Prisma } from '../../client';
import { PlanCountOutputTypeCountPaymentsArgsObjectSchema as PlanCountOutputTypeCountPaymentsArgsObjectSchema } from './PlanCountOutputTypeCountPaymentsArgs.schema';
import { PlanCountOutputTypeCountSubscribesArgsObjectSchema as PlanCountOutputTypeCountSubscribesArgsObjectSchema } from './PlanCountOutputTypeCountSubscribesArgs.schema'

const makeSchema = () => z.object({
  payments: z.union([z.boolean(), z.lazy(() => PlanCountOutputTypeCountPaymentsArgsObjectSchema)]).optional(),
  subscribes: z.union([z.boolean(), z.lazy(() => PlanCountOutputTypeCountSubscribesArgsObjectSchema)]).optional()
}).strict();
export const PlanCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.PlanCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.PlanCountOutputTypeSelect>;
export const PlanCountOutputTypeSelectObjectZodSchema = makeSchema();
