import type { Prisma } from '../client';
import * as z from 'zod';
import { SubscribeSelectObjectSchema as SubscribeSelectObjectSchema } from './objects/SubscribeSelect.schema';
import { SubscribeIncludeObjectSchema as SubscribeIncludeObjectSchema } from './objects/SubscribeInclude.schema';
import { SubscribeWhereUniqueInputObjectSchema as SubscribeWhereUniqueInputObjectSchema } from './objects/SubscribeWhereUniqueInput.schema';
import { SubscribeCreateInputObjectSchema as SubscribeCreateInputObjectSchema } from './objects/SubscribeCreateInput.schema';
import { SubscribeUncheckedCreateInputObjectSchema as SubscribeUncheckedCreateInputObjectSchema } from './objects/SubscribeUncheckedCreateInput.schema';
import { SubscribeUpdateInputObjectSchema as SubscribeUpdateInputObjectSchema } from './objects/SubscribeUpdateInput.schema';
import { SubscribeUncheckedUpdateInputObjectSchema as SubscribeUncheckedUpdateInputObjectSchema } from './objects/SubscribeUncheckedUpdateInput.schema';

export const SubscribeUpsertOneSchema: z.ZodType<Prisma.SubscribeUpsertArgs> = z.object({ select: SubscribeSelectObjectSchema.optional(), include: SubscribeIncludeObjectSchema.optional(), where: SubscribeWhereUniqueInputObjectSchema, create: z.union([ SubscribeCreateInputObjectSchema, SubscribeUncheckedCreateInputObjectSchema ]), update: z.union([ SubscribeUpdateInputObjectSchema, SubscribeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.SubscribeUpsertArgs>;

export const SubscribeUpsertOneZodSchema = z.object({ select: SubscribeSelectObjectSchema.optional(), include: SubscribeIncludeObjectSchema.optional(), where: SubscribeWhereUniqueInputObjectSchema, create: z.union([ SubscribeCreateInputObjectSchema, SubscribeUncheckedCreateInputObjectSchema ]), update: z.union([ SubscribeUpdateInputObjectSchema, SubscribeUncheckedUpdateInputObjectSchema ]) }).strict();