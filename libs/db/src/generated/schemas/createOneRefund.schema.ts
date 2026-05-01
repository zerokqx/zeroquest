import type { Prisma } from '../client';
import * as z from 'zod';
import { RefundSelectObjectSchema as RefundSelectObjectSchema } from './objects/RefundSelect.schema';
import { RefundIncludeObjectSchema as RefundIncludeObjectSchema } from './objects/RefundInclude.schema';
import { RefundCreateInputObjectSchema as RefundCreateInputObjectSchema } from './objects/RefundCreateInput.schema';
import { RefundUncheckedCreateInputObjectSchema as RefundUncheckedCreateInputObjectSchema } from './objects/RefundUncheckedCreateInput.schema';

export const RefundCreateOneSchema: z.ZodType<Prisma.RefundCreateArgs> = z.object({ select: RefundSelectObjectSchema.optional(), include: RefundIncludeObjectSchema.optional(), data: z.union([RefundCreateInputObjectSchema, RefundUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.RefundCreateArgs>;

export const RefundCreateOneZodSchema = z.object({ select: RefundSelectObjectSchema.optional(), include: RefundIncludeObjectSchema.optional(), data: z.union([RefundCreateInputObjectSchema, RefundUncheckedCreateInputObjectSchema]) }).strict();