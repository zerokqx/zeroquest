import * as z from 'zod';
import type { Prisma } from '../../client';
import { SessionIdUserIdCompoundUniqueInputObjectSchema as SessionIdUserIdCompoundUniqueInputObjectSchema } from './SessionIdUserIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  id_userId: z.lazy(() => SessionIdUserIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const SessionWhereUniqueInputObjectSchema: z.ZodType<Prisma.SessionWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionWhereUniqueInput>;
export const SessionWhereUniqueInputObjectZodSchema = makeSchema();
