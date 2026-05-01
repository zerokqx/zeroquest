import type { Prisma } from '../client';
import * as z from 'zod';
import { RefundSelectObjectSchema as RefundSelectObjectSchema } from './objects/RefundSelect.schema';
import { RefundCreateManyInputObjectSchema as RefundCreateManyInputObjectSchema } from './objects/RefundCreateManyInput.schema';

export const RefundCreateManyAndReturnSchema: z.ZodType<Prisma.RefundCreateManyAndReturnArgs> = z.object({ select: RefundSelectObjectSchema.optional(), data: z.union([ RefundCreateManyInputObjectSchema, z.array(RefundCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RefundCreateManyAndReturnArgs>;

export const RefundCreateManyAndReturnZodSchema = z.object({ select: RefundSelectObjectSchema.optional(), data: z.union([ RefundCreateManyInputObjectSchema, z.array(RefundCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();