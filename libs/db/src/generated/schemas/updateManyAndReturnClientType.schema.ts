import type { Prisma } from '../client';
import * as z from 'zod';
import { ClientTypeSelectObjectSchema as ClientTypeSelectObjectSchema } from './objects/ClientTypeSelect.schema';
import { ClientTypeUpdateManyMutationInputObjectSchema as ClientTypeUpdateManyMutationInputObjectSchema } from './objects/ClientTypeUpdateManyMutationInput.schema';
import { ClientTypeWhereInputObjectSchema as ClientTypeWhereInputObjectSchema } from './objects/ClientTypeWhereInput.schema';

export const ClientTypeUpdateManyAndReturnSchema: z.ZodType<Prisma.ClientTypeUpdateManyAndReturnArgs> = z.object({ select: ClientTypeSelectObjectSchema.optional(), data: ClientTypeUpdateManyMutationInputObjectSchema, where: ClientTypeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ClientTypeUpdateManyAndReturnArgs>;

export const ClientTypeUpdateManyAndReturnZodSchema = z.object({ select: ClientTypeSelectObjectSchema.optional(), data: ClientTypeUpdateManyMutationInputObjectSchema, where: ClientTypeWhereInputObjectSchema.optional() }).strict();