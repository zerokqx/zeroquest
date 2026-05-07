import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const TotpTokenIncludeObjectSchema: z.ZodType<Prisma.TotpTokenInclude> = makeSchema() as unknown as z.ZodType<Prisma.TotpTokenInclude>;
export const TotpTokenIncludeObjectZodSchema = makeSchema();
