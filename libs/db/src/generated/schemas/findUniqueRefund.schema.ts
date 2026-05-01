import type { Prisma } from '../client';
import * as z from 'zod';
import { RefundSelectObjectSchema as RefundSelectObjectSchema } from './objects/RefundSelect.schema';
import { RefundIncludeObjectSchema as RefundIncludeObjectSchema } from './objects/RefundInclude.schema';
import { RefundWhereUniqueInputObjectSchema as RefundWhereUniqueInputObjectSchema } from './objects/RefundWhereUniqueInput.schema';

export const RefundFindUniqueSchema: z.ZodType<Prisma.RefundFindUniqueArgs> = z.object({ select: RefundSelectObjectSchema.optional(), include: RefundIncludeObjectSchema.optional(), where: RefundWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RefundFindUniqueArgs>;

export const RefundFindUniqueZodSchema = z.object({ select: RefundSelectObjectSchema.optional(), include: RefundIncludeObjectSchema.optional(), where: RefundWhereUniqueInputObjectSchema }).strict();