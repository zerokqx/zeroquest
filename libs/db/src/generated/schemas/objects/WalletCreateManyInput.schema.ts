import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  held: z.number().int().optional(),
  balance: z.number().int().optional()
}).strict();
export const WalletCreateManyInputObjectSchema: z.ZodType<Prisma.WalletCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.WalletCreateManyInput>;
export const WalletCreateManyInputObjectZodSchema = makeSchema();
