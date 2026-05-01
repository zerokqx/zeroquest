import type { Prisma } from '../client';
import * as z from 'zod';
import { ClientTypeSelectObjectSchema as ClientTypeSelectObjectSchema } from './objects/ClientTypeSelect.schema';
import { ClientTypeIncludeObjectSchema as ClientTypeIncludeObjectSchema } from './objects/ClientTypeInclude.schema';
import { ClientTypeCreateInputObjectSchema as ClientTypeCreateInputObjectSchema } from './objects/ClientTypeCreateInput.schema';
import { ClientTypeUncheckedCreateInputObjectSchema as ClientTypeUncheckedCreateInputObjectSchema } from './objects/ClientTypeUncheckedCreateInput.schema';

export const ClientTypeCreateOneSchema: z.ZodType<Prisma.ClientTypeCreateArgs> = z.object({ select: ClientTypeSelectObjectSchema.optional(), include: ClientTypeIncludeObjectSchema.optional(), data: z.union([ClientTypeCreateInputObjectSchema, ClientTypeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ClientTypeCreateArgs>;

export const ClientTypeCreateOneZodSchema = z.object({ select: ClientTypeSelectObjectSchema.optional(), include: ClientTypeIncludeObjectSchema.optional(), data: z.union([ClientTypeCreateInputObjectSchema, ClientTypeUncheckedCreateInputObjectSchema]) }).strict();