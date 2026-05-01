import type { Prisma } from '../client';
import * as z from 'zod';
import { SubscribeSelectObjectSchema as SubscribeSelectObjectSchema } from './objects/SubscribeSelect.schema';
import { SubscribeIncludeObjectSchema as SubscribeIncludeObjectSchema } from './objects/SubscribeInclude.schema';
import { SubscribeWhereUniqueInputObjectSchema as SubscribeWhereUniqueInputObjectSchema } from './objects/SubscribeWhereUniqueInput.schema';

export const SubscribeFindUniqueOrThrowSchema: z.ZodType<Prisma.SubscribeFindUniqueOrThrowArgs> = z.object({ select: SubscribeSelectObjectSchema.optional(), include: SubscribeIncludeObjectSchema.optional(), where: SubscribeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SubscribeFindUniqueOrThrowArgs>;

export const SubscribeFindUniqueOrThrowZodSchema = z.object({ select: SubscribeSelectObjectSchema.optional(), include: SubscribeIncludeObjectSchema.optional(), where: SubscribeWhereUniqueInputObjectSchema }).strict();