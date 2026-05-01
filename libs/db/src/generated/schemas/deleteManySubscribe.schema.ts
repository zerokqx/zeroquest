import type { Prisma } from '../client';
import * as z from 'zod';
import { SubscribeWhereInputObjectSchema as SubscribeWhereInputObjectSchema } from './objects/SubscribeWhereInput.schema';

export const SubscribeDeleteManySchema: z.ZodType<Prisma.SubscribeDeleteManyArgs> = z.object({ where: SubscribeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SubscribeDeleteManyArgs>;

export const SubscribeDeleteManyZodSchema = z.object({ where: SubscribeWhereInputObjectSchema.optional() }).strict();