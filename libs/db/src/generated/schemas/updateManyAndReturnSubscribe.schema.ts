import type { Prisma } from '../client';
import * as z from 'zod';
import { SubscribeSelectObjectSchema as SubscribeSelectObjectSchema } from './objects/SubscribeSelect.schema';
import { SubscribeUpdateManyMutationInputObjectSchema as SubscribeUpdateManyMutationInputObjectSchema } from './objects/SubscribeUpdateManyMutationInput.schema';
import { SubscribeWhereInputObjectSchema as SubscribeWhereInputObjectSchema } from './objects/SubscribeWhereInput.schema';

export const SubscribeUpdateManyAndReturnSchema: z.ZodType<Prisma.SubscribeUpdateManyAndReturnArgs> = z.object({ select: SubscribeSelectObjectSchema.optional(), data: SubscribeUpdateManyMutationInputObjectSchema, where: SubscribeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SubscribeUpdateManyAndReturnArgs>;

export const SubscribeUpdateManyAndReturnZodSchema = z.object({ select: SubscribeSelectObjectSchema.optional(), data: SubscribeUpdateManyMutationInputObjectSchema, where: SubscribeWhereInputObjectSchema.optional() }).strict();