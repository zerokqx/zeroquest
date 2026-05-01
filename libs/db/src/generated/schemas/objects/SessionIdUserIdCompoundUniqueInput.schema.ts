import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.string(),
  userId: z.string()
}).strict();
export const SessionIdUserIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.SessionIdUserIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionIdUserIdCompoundUniqueInput>;
export const SessionIdUserIdCompoundUniqueInputObjectZodSchema = makeSchema();
