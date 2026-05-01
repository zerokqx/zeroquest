import type { Prisma } from '../client';
import * as z from 'zod';
import { SubscribeCreateManyInputObjectSchema as SubscribeCreateManyInputObjectSchema } from './objects/SubscribeCreateManyInput.schema';

export const SubscribeCreateManySchema: z.ZodType<Prisma.SubscribeCreateManyArgs> = z.object({ data: z.union([ SubscribeCreateManyInputObjectSchema, z.array(SubscribeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SubscribeCreateManyArgs>;

export const SubscribeCreateManyZodSchema = z.object({ data: z.union([ SubscribeCreateManyInputObjectSchema, z.array(SubscribeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();