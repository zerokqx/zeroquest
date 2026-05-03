import * as z from 'zod';
import type { Prisma } from '../../client';
import { IpSelectObjectSchema as IpSelectObjectSchema } from './IpSelect.schema';
import { IpIncludeObjectSchema as IpIncludeObjectSchema } from './IpInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => IpSelectObjectSchema).optional(),
  include: z.lazy(() => IpIncludeObjectSchema).optional()
}).strict();
export const IpArgsObjectSchema = makeSchema();
export const IpArgsObjectZodSchema = makeSchema();
