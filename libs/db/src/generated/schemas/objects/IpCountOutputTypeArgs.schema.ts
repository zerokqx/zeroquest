import * as z from 'zod';
import type { Prisma } from '../../client';
import { IpCountOutputTypeSelectObjectSchema as IpCountOutputTypeSelectObjectSchema } from './IpCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => IpCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const IpCountOutputTypeArgsObjectSchema = makeSchema();
export const IpCountOutputTypeArgsObjectZodSchema = makeSchema();
