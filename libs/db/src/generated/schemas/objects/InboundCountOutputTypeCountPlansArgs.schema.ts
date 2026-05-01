import * as z from 'zod';
import type { Prisma } from '../../client';
import { PlanWhereInputObjectSchema as PlanWhereInputObjectSchema } from './PlanWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PlanWhereInputObjectSchema).optional()
}).strict();
export const InboundCountOutputTypeCountPlansArgsObjectSchema = makeSchema();
export const InboundCountOutputTypeCountPlansArgsObjectZodSchema = makeSchema();
