import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string().optional()
}).strict();
export const TotpTokenWhereUniqueInputObjectSchema: z.ZodType<Prisma.TotpTokenWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TotpTokenWhereUniqueInput>;
export const TotpTokenWhereUniqueInputObjectZodSchema = makeSchema();
