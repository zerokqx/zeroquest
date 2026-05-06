import * as z from 'zod';
import type { Prisma } from '../../client';
import { IpSelectObjectSchema as IpSelectObjectSchema } from './IpSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => IpSelectObjectSchema).optional()
}).strict();
export const IpArgsObjectSchema = makeSchema();
export const IpArgsObjectZodSchema = makeSchema();
