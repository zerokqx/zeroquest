import type { Prisma } from '../client';
import * as z from 'zod';
import { SubscribeSelectObjectSchema as SubscribeSelectObjectSchema } from './objects/SubscribeSelect.schema';
import { SubscribeCreateManyInputObjectSchema as SubscribeCreateManyInputObjectSchema } from './objects/SubscribeCreateManyInput.schema';

export const SubscribeCreateManyAndReturnSchema: z.ZodType<Prisma.SubscribeCreateManyAndReturnArgs> = z.object({ select: SubscribeSelectObjectSchema.optional(), data: z.union([ SubscribeCreateManyInputObjectSchema, z.array(SubscribeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SubscribeCreateManyAndReturnArgs>;

export const SubscribeCreateManyAndReturnZodSchema = z.object({ select: SubscribeSelectObjectSchema.optional(), data: z.union([ SubscribeCreateManyInputObjectSchema, z.array(SubscribeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();