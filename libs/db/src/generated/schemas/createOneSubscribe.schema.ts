import type { Prisma } from '../client';
import * as z from 'zod';
import { SubscribeSelectObjectSchema as SubscribeSelectObjectSchema } from './objects/SubscribeSelect.schema';
import { SubscribeIncludeObjectSchema as SubscribeIncludeObjectSchema } from './objects/SubscribeInclude.schema';
import { SubscribeCreateInputObjectSchema as SubscribeCreateInputObjectSchema } from './objects/SubscribeCreateInput.schema';
import { SubscribeUncheckedCreateInputObjectSchema as SubscribeUncheckedCreateInputObjectSchema } from './objects/SubscribeUncheckedCreateInput.schema';

export const SubscribeCreateOneSchema: z.ZodType<Prisma.SubscribeCreateArgs> = z.object({ select: SubscribeSelectObjectSchema.optional(), include: SubscribeIncludeObjectSchema.optional(), data: z.union([SubscribeCreateInputObjectSchema, SubscribeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.SubscribeCreateArgs>;

export const SubscribeCreateOneZodSchema = z.object({ select: SubscribeSelectObjectSchema.optional(), include: SubscribeIncludeObjectSchema.optional(), data: z.union([SubscribeCreateInputObjectSchema, SubscribeUncheckedCreateInputObjectSchema]) }).strict();