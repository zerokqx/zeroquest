import * as z from 'zod';
import type { Prisma } from '../../client';
import { InboundCountOutputTypeSelectObjectSchema as InboundCountOutputTypeSelectObjectSchema } from './InboundCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => InboundCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const InboundCountOutputTypeArgsObjectSchema = makeSchema();
export const InboundCountOutputTypeArgsObjectZodSchema = makeSchema();
