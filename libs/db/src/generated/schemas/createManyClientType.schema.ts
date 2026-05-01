import type { Prisma } from '../client';
import * as z from 'zod';
import { ClientTypeCreateManyInputObjectSchema as ClientTypeCreateManyInputObjectSchema } from './objects/ClientTypeCreateManyInput.schema';

export const ClientTypeCreateManySchema: z.ZodType<Prisma.ClientTypeCreateManyArgs> = z.object({ data: z.union([ ClientTypeCreateManyInputObjectSchema, z.array(ClientTypeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ClientTypeCreateManyArgs>;

export const ClientTypeCreateManyZodSchema = z.object({ data: z.union([ ClientTypeCreateManyInputObjectSchema, z.array(ClientTypeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();