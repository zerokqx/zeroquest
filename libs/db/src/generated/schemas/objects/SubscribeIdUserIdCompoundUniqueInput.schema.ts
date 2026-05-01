import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.string(),
  userId: z.string()
}).strict();
export const SubscribeIdUserIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.SubscribeIdUserIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeIdUserIdCompoundUniqueInput>;
export const SubscribeIdUserIdCompoundUniqueInputObjectZodSchema = makeSchema();
