import type { Prisma } from '../client';
import * as z from 'zod';
import { RefundSelectObjectSchema as RefundSelectObjectSchema } from './objects/RefundSelect.schema';
import { RefundIncludeObjectSchema as RefundIncludeObjectSchema } from './objects/RefundInclude.schema';
import { RefundUpdateInputObjectSchema as RefundUpdateInputObjectSchema } from './objects/RefundUpdateInput.schema';
import { RefundUncheckedUpdateInputObjectSchema as RefundUncheckedUpdateInputObjectSchema } from './objects/RefundUncheckedUpdateInput.schema';
import { RefundWhereUniqueInputObjectSchema as RefundWhereUniqueInputObjectSchema } from './objects/RefundWhereUniqueInput.schema';

export const RefundUpdateOneSchema: z.ZodType<Prisma.RefundUpdateArgs> = z.object({ select: RefundSelectObjectSchema.optional(), include: RefundIncludeObjectSchema.optional(), data: z.union([RefundUpdateInputObjectSchema, RefundUncheckedUpdateInputObjectSchema]), where: RefundWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RefundUpdateArgs>;

export const RefundUpdateOneZodSchema = z.object({ select: RefundSelectObjectSchema.optional(), include: RefundIncludeObjectSchema.optional(), data: z.union([RefundUpdateInputObjectSchema, RefundUncheckedUpdateInputObjectSchema]), where: RefundWhereUniqueInputObjectSchema }).strict();