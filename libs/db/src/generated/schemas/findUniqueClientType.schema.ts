import type { Prisma } from '../client';
import * as z from 'zod';
import { ClientTypeSelectObjectSchema as ClientTypeSelectObjectSchema } from './objects/ClientTypeSelect.schema';
import { ClientTypeIncludeObjectSchema as ClientTypeIncludeObjectSchema } from './objects/ClientTypeInclude.schema';
import { ClientTypeWhereUniqueInputObjectSchema as ClientTypeWhereUniqueInputObjectSchema } from './objects/ClientTypeWhereUniqueInput.schema';

export const ClientTypeFindUniqueSchema: z.ZodType<Prisma.ClientTypeFindUniqueArgs> = z.object({ select: ClientTypeSelectObjectSchema.optional(), include: ClientTypeIncludeObjectSchema.optional(), where: ClientTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ClientTypeFindUniqueArgs>;

export const ClientTypeFindUniqueZodSchema = z.object({ select: ClientTypeSelectObjectSchema.optional(), include: ClientTypeIncludeObjectSchema.optional(), where: ClientTypeWhereUniqueInputObjectSchema }).strict();