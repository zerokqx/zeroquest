import type { Prisma } from '../client';
import * as z from 'zod';
import { InboundCreateManyInputObjectSchema as InboundCreateManyInputObjectSchema } from './objects/InboundCreateManyInput.schema';

export const InboundCreateManySchema: z.ZodType<Prisma.InboundCreateManyArgs> = z.object({ data: z.union([ InboundCreateManyInputObjectSchema, z.array(InboundCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.InboundCreateManyArgs>;

export const InboundCreateManyZodSchema = z.object({ data: z.union([ InboundCreateManyInputObjectSchema, z.array(InboundCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();