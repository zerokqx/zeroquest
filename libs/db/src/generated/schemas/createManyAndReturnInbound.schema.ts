import type { Prisma } from '../client';
import * as z from 'zod';
import { InboundSelectObjectSchema as InboundSelectObjectSchema } from './objects/InboundSelect.schema';
import { InboundCreateManyInputObjectSchema as InboundCreateManyInputObjectSchema } from './objects/InboundCreateManyInput.schema';

export const InboundCreateManyAndReturnSchema: z.ZodType<Prisma.InboundCreateManyAndReturnArgs> = z.object({ select: InboundSelectObjectSchema.optional(), data: z.union([ InboundCreateManyInputObjectSchema, z.array(InboundCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.InboundCreateManyAndReturnArgs>;

export const InboundCreateManyAndReturnZodSchema = z.object({ select: InboundSelectObjectSchema.optional(), data: z.union([ InboundCreateManyInputObjectSchema, z.array(InboundCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();