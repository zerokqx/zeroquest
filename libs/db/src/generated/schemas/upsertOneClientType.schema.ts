import type { Prisma } from '../client';
import * as z from 'zod';
import { ClientTypeSelectObjectSchema as ClientTypeSelectObjectSchema } from './objects/ClientTypeSelect.schema';
import { ClientTypeWhereUniqueInputObjectSchema as ClientTypeWhereUniqueInputObjectSchema } from './objects/ClientTypeWhereUniqueInput.schema';
import { ClientTypeCreateInputObjectSchema as ClientTypeCreateInputObjectSchema } from './objects/ClientTypeCreateInput.schema';
import { ClientTypeUncheckedCreateInputObjectSchema as ClientTypeUncheckedCreateInputObjectSchema } from './objects/ClientTypeUncheckedCreateInput.schema';
import { ClientTypeUpdateInputObjectSchema as ClientTypeUpdateInputObjectSchema } from './objects/ClientTypeUpdateInput.schema';
import { ClientTypeUncheckedUpdateInputObjectSchema as ClientTypeUncheckedUpdateInputObjectSchema } from './objects/ClientTypeUncheckedUpdateInput.schema';

export const ClientTypeUpsertOneSchema: z.ZodType<Prisma.ClientTypeUpsertArgs> = z.object({ select: ClientTypeSelectObjectSchema.optional(),  where: ClientTypeWhereUniqueInputObjectSchema, create: z.union([ ClientTypeCreateInputObjectSchema, ClientTypeUncheckedCreateInputObjectSchema ]), update: z.union([ ClientTypeUpdateInputObjectSchema, ClientTypeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ClientTypeUpsertArgs>;

export const ClientTypeUpsertOneZodSchema = z.object({ select: ClientTypeSelectObjectSchema.optional(),  where: ClientTypeWhereUniqueInputObjectSchema, create: z.union([ ClientTypeCreateInputObjectSchema, ClientTypeUncheckedCreateInputObjectSchema ]), update: z.union([ ClientTypeUpdateInputObjectSchema, ClientTypeUncheckedUpdateInputObjectSchema ]) }).strict();