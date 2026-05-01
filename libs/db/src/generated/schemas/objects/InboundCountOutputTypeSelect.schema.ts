import * as z from 'zod';
import type { Prisma } from '../../client';
import { InboundCountOutputTypeCountPlansArgsObjectSchema as InboundCountOutputTypeCountPlansArgsObjectSchema } from './InboundCountOutputTypeCountPlansArgs.schema'

const makeSchema = () => z.object({
  plans: z.union([z.boolean(), z.lazy(() => InboundCountOutputTypeCountPlansArgsObjectSchema)]).optional()
}).strict();
export const InboundCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.InboundCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.InboundCountOutputTypeSelect>;
export const InboundCountOutputTypeSelectObjectZodSchema = makeSchema();
