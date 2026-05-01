import type { Prisma } from '../client';
import * as z from 'zod';
import { ClientTypeUpdateManyMutationInputObjectSchema as ClientTypeUpdateManyMutationInputObjectSchema } from './objects/ClientTypeUpdateManyMutationInput.schema';
import { ClientTypeWhereInputObjectSchema as ClientTypeWhereInputObjectSchema } from './objects/ClientTypeWhereInput.schema';

export const ClientTypeUpdateManySchema: z.ZodType<Prisma.ClientTypeUpdateManyArgs> = z.object({ data: ClientTypeUpdateManyMutationInputObjectSchema, where: ClientTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ClientTypeUpdateManyArgs>;

export const ClientTypeUpdateManyZodSchema = z.object({ data: ClientTypeUpdateManyMutationInputObjectSchema, where: ClientTypeWhereInputObjectSchema.optional() }).strict();