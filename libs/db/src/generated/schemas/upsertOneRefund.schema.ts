import type { Prisma } from '../client';
import * as z from 'zod';
import { RefundSelectObjectSchema as RefundSelectObjectSchema } from './objects/RefundSelect.schema';
import { RefundIncludeObjectSchema as RefundIncludeObjectSchema } from './objects/RefundInclude.schema';
import { RefundWhereUniqueInputObjectSchema as RefundWhereUniqueInputObjectSchema } from './objects/RefundWhereUniqueInput.schema';
import { RefundCreateInputObjectSchema as RefundCreateInputObjectSchema } from './objects/RefundCreateInput.schema';
import { RefundUncheckedCreateInputObjectSchema as RefundUncheckedCreateInputObjectSchema } from './objects/RefundUncheckedCreateInput.schema';
import { RefundUpdateInputObjectSchema as RefundUpdateInputObjectSchema } from './objects/RefundUpdateInput.schema';
import { RefundUncheckedUpdateInputObjectSchema as RefundUncheckedUpdateInputObjectSchema } from './objects/RefundUncheckedUpdateInput.schema';

export const RefundUpsertOneSchema: z.ZodType<Prisma.RefundUpsertArgs> = z.object({ select: RefundSelectObjectSchema.optional(), include: RefundIncludeObjectSchema.optional(), where: RefundWhereUniqueInputObjectSchema, create: z.union([ RefundCreateInputObjectSchema, RefundUncheckedCreateInputObjectSchema ]), update: z.union([ RefundUpdateInputObjectSchema, RefundUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.RefundUpsertArgs>;

export const RefundUpsertOneZodSchema = z.object({ select: RefundSelectObjectSchema.optional(), include: RefundIncludeObjectSchema.optional(), where: RefundWhereUniqueInputObjectSchema, create: z.union([ RefundCreateInputObjectSchema, RefundUncheckedCreateInputObjectSchema ]), update: z.union([ RefundUpdateInputObjectSchema, RefundUncheckedUpdateInputObjectSchema ]) }).strict();