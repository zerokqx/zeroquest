import type { Prisma } from '../client';
import * as z from 'zod';
import { ClientTypeWhereInputObjectSchema as ClientTypeWhereInputObjectSchema } from './objects/ClientTypeWhereInput.schema';

export const ClientTypeDeleteManySchema: z.ZodType<Prisma.ClientTypeDeleteManyArgs> = z.object({ where: ClientTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ClientTypeDeleteManyArgs>;

export const ClientTypeDeleteManyZodSchema = z.object({ where: ClientTypeWhereInputObjectSchema.optional() }).strict();