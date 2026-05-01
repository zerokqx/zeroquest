import type { Prisma } from '../client';
import * as z from 'zod';
import { SubscribeSelectObjectSchema as SubscribeSelectObjectSchema } from './objects/SubscribeSelect.schema';
import { SubscribeIncludeObjectSchema as SubscribeIncludeObjectSchema } from './objects/SubscribeInclude.schema';
import { SubscribeUpdateInputObjectSchema as SubscribeUpdateInputObjectSchema } from './objects/SubscribeUpdateInput.schema';
import { SubscribeUncheckedUpdateInputObjectSchema as SubscribeUncheckedUpdateInputObjectSchema } from './objects/SubscribeUncheckedUpdateInput.schema';
import { SubscribeWhereUniqueInputObjectSchema as SubscribeWhereUniqueInputObjectSchema } from './objects/SubscribeWhereUniqueInput.schema';

export const SubscribeUpdateOneSchema: z.ZodType<Prisma.SubscribeUpdateArgs> = z.object({ select: SubscribeSelectObjectSchema.optional(), include: SubscribeIncludeObjectSchema.optional(), data: z.union([SubscribeUpdateInputObjectSchema, SubscribeUncheckedUpdateInputObjectSchema]), where: SubscribeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SubscribeUpdateArgs>;

export const SubscribeUpdateOneZodSchema = z.object({ select: SubscribeSelectObjectSchema.optional(), include: SubscribeIncludeObjectSchema.optional(), data: z.union([SubscribeUpdateInputObjectSchema, SubscribeUncheckedUpdateInputObjectSchema]), where: SubscribeWhereUniqueInputObjectSchema }).strict();