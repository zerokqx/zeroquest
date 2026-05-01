import type { Prisma } from '../client';
import * as z from 'zod';
import { ClientTypeSelectObjectSchema as ClientTypeSelectObjectSchema } from './objects/ClientTypeSelect.schema';
import { ClientTypeIncludeObjectSchema as ClientTypeIncludeObjectSchema } from './objects/ClientTypeInclude.schema';
import { ClientTypeWhereUniqueInputObjectSchema as ClientTypeWhereUniqueInputObjectSchema } from './objects/ClientTypeWhereUniqueInput.schema';

export const ClientTypeDeleteOneSchema: z.ZodType<Prisma.ClientTypeDeleteArgs> = z.object({ select: ClientTypeSelectObjectSchema.optional(), include: ClientTypeIncludeObjectSchema.optional(), where: ClientTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ClientTypeDeleteArgs>;

export const ClientTypeDeleteOneZodSchema = z.object({ select: ClientTypeSelectObjectSchema.optional(), include: ClientTypeIncludeObjectSchema.optional(), where: ClientTypeWhereUniqueInputObjectSchema }).strict();