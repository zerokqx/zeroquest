import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  ip: z.string().optional()
}).strict();
export const IpWhereUniqueInputObjectSchema: z.ZodType<Prisma.IpWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.IpWhereUniqueInput>;
export const IpWhereUniqueInputObjectZodSchema = makeSchema();
