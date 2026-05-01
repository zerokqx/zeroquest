import type { Prisma } from '../client';
import * as z from 'zod';
import { ClientTypeSelectObjectSchema as ClientTypeSelectObjectSchema } from './objects/ClientTypeSelect.schema';
import { ClientTypeIncludeObjectSchema as ClientTypeIncludeObjectSchema } from './objects/ClientTypeInclude.schema';
import { ClientTypeUpdateInputObjectSchema as ClientTypeUpdateInputObjectSchema } from './objects/ClientTypeUpdateInput.schema';
import { ClientTypeUncheckedUpdateInputObjectSchema as ClientTypeUncheckedUpdateInputObjectSchema } from './objects/ClientTypeUncheckedUpdateInput.schema';
import { ClientTypeWhereUniqueInputObjectSchema as ClientTypeWhereUniqueInputObjectSchema } from './objects/ClientTypeWhereUniqueInput.schema';

export const ClientTypeUpdateOneSchema: z.ZodType<Prisma.ClientTypeUpdateArgs> = z.object({ select: ClientTypeSelectObjectSchema.optional(), include: ClientTypeIncludeObjectSchema.optional(), data: z.union([ClientTypeUpdateInputObjectSchema, ClientTypeUncheckedUpdateInputObjectSchema]), where: ClientTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ClientTypeUpdateArgs>;

export const ClientTypeUpdateOneZodSchema = z.object({ select: ClientTypeSelectObjectSchema.optional(), include: ClientTypeIncludeObjectSchema.optional(), data: z.union([ClientTypeUpdateInputObjectSchema, ClientTypeUncheckedUpdateInputObjectSchema]), where: ClientTypeWhereUniqueInputObjectSchema }).strict();