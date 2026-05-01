import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const WalletWhereUniqueInputObjectSchema: z.ZodType<Prisma.WalletWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletWhereUniqueInput>;
export const WalletWhereUniqueInputObjectZodSchema = makeSchema();
