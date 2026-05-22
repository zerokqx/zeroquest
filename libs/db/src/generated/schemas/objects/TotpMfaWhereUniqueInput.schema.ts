import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string().optional()
}).strict();
export const TotpMfaWhereUniqueInputObjectSchema: z.ZodType<Prisma.TotpMfaWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TotpMfaWhereUniqueInput>;
export const TotpMfaWhereUniqueInputObjectZodSchema = makeSchema();
