import type { Prisma } from '../client';
import * as z from 'zod';
import { RefundSelectObjectSchema as RefundSelectObjectSchema } from './objects/RefundSelect.schema';
import { RefundUpdateManyMutationInputObjectSchema as RefundUpdateManyMutationInputObjectSchema } from './objects/RefundUpdateManyMutationInput.schema';
import { RefundWhereInputObjectSchema as RefundWhereInputObjectSchema } from './objects/RefundWhereInput.schema';

export const RefundUpdateManyAndReturnSchema: z.ZodType<Prisma.RefundUpdateManyAndReturnArgs> = z.object({ select: RefundSelectObjectSchema.optional(), data: RefundUpdateManyMutationInputObjectSchema, where: RefundWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RefundUpdateManyAndReturnArgs>;

export const RefundUpdateManyAndReturnZodSchema = z.object({ select: RefundSelectObjectSchema.optional(), data: RefundUpdateManyMutationInputObjectSchema, where: RefundWhereInputObjectSchema.optional() }).strict();