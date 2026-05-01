import type { Prisma } from '../client';
import * as z from 'zod';
import { RefundUpdateManyMutationInputObjectSchema as RefundUpdateManyMutationInputObjectSchema } from './objects/RefundUpdateManyMutationInput.schema';
import { RefundWhereInputObjectSchema as RefundWhereInputObjectSchema } from './objects/RefundWhereInput.schema';

export const RefundUpdateManySchema: z.ZodType<Prisma.RefundUpdateManyArgs> = z.object({ data: RefundUpdateManyMutationInputObjectSchema, where: RefundWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RefundUpdateManyArgs>;

export const RefundUpdateManyZodSchema = z.object({ data: RefundUpdateManyMutationInputObjectSchema, where: RefundWhereInputObjectSchema.optional() }).strict();