import type { Prisma } from '../client';
import * as z from 'zod';
import { SubscribeSelectObjectSchema as SubscribeSelectObjectSchema } from './objects/SubscribeSelect.schema';
import { SubscribeIncludeObjectSchema as SubscribeIncludeObjectSchema } from './objects/SubscribeInclude.schema';
import { SubscribeWhereUniqueInputObjectSchema as SubscribeWhereUniqueInputObjectSchema } from './objects/SubscribeWhereUniqueInput.schema';

export const SubscribeDeleteOneSchema: z.ZodType<Prisma.SubscribeDeleteArgs> = z.object({ select: SubscribeSelectObjectSchema.optional(), include: SubscribeIncludeObjectSchema.optional(), where: SubscribeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SubscribeDeleteArgs>;

export const SubscribeDeleteOneZodSchema = z.object({ select: SubscribeSelectObjectSchema.optional(), include: SubscribeIncludeObjectSchema.optional(), where: SubscribeWhereUniqueInputObjectSchema }).strict();