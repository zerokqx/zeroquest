import * as z from 'zod';
import type { Prisma } from '../../client';
import { SessionFindManySchema as SessionFindManySchema } from '../findManySession.schema';
import { IpCountOutputTypeArgsObjectSchema as IpCountOutputTypeArgsObjectSchema } from './IpCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => IpCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const IpIncludeObjectSchema: z.ZodType<Prisma.IpInclude> = makeSchema() as unknown as z.ZodType<Prisma.IpInclude>;
export const IpIncludeObjectZodSchema = makeSchema();
