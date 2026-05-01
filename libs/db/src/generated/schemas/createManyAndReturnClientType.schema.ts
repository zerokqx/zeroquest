import type { Prisma } from '../client';
import * as z from 'zod';
import { ClientTypeSelectObjectSchema as ClientTypeSelectObjectSchema } from './objects/ClientTypeSelect.schema';
import { ClientTypeCreateManyInputObjectSchema as ClientTypeCreateManyInputObjectSchema } from './objects/ClientTypeCreateManyInput.schema';

export const ClientTypeCreateManyAndReturnSchema: z.ZodType<Prisma.ClientTypeCreateManyAndReturnArgs> = z.object({ select: ClientTypeSelectObjectSchema.optional(), data: z.union([ ClientTypeCreateManyInputObjectSchema, z.array(ClientTypeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ClientTypeCreateManyAndReturnArgs>;

export const ClientTypeCreateManyAndReturnZodSchema = z.object({ select: ClientTypeSelectObjectSchema.optional(), data: z.union([ ClientTypeCreateManyInputObjectSchema, z.array(ClientTypeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();