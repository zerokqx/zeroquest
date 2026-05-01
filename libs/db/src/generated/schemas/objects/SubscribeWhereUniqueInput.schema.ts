import * as z from 'zod';
import type { Prisma } from '../../client';
import { SubscribeIdUserIdCompoundUniqueInputObjectSchema as SubscribeIdUserIdCompoundUniqueInputObjectSchema } from './SubscribeIdUserIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  id_userId: z.lazy(() => SubscribeIdUserIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const SubscribeWhereUniqueInputObjectSchema: z.ZodType<Prisma.SubscribeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeWhereUniqueInput>;
export const SubscribeWhereUniqueInputObjectZodSchema = makeSchema();
