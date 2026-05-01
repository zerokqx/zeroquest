import type { Prisma } from '../client';
import * as z from 'zod';
import { RefundWhereInputObjectSchema as RefundWhereInputObjectSchema } from './objects/RefundWhereInput.schema';

export const RefundDeleteManySchema: z.ZodType<Prisma.RefundDeleteManyArgs> = z.object({ where: RefundWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RefundDeleteManyArgs>;

export const RefundDeleteManyZodSchema = z.object({ where: RefundWhereInputObjectSchema.optional() }).strict();