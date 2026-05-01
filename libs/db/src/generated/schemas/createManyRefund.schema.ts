import type { Prisma } from '../client';
import * as z from 'zod';
import { RefundCreateManyInputObjectSchema as RefundCreateManyInputObjectSchema } from './objects/RefundCreateManyInput.schema';

export const RefundCreateManySchema: z.ZodType<Prisma.RefundCreateManyArgs> = z.object({ data: z.union([ RefundCreateManyInputObjectSchema, z.array(RefundCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RefundCreateManyArgs>;

export const RefundCreateManyZodSchema = z.object({ data: z.union([ RefundCreateManyInputObjectSchema, z.array(RefundCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();