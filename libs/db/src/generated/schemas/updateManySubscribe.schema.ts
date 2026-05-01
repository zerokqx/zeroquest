import type { Prisma } from '../client';
import * as z from 'zod';
import { SubscribeUpdateManyMutationInputObjectSchema as SubscribeUpdateManyMutationInputObjectSchema } from './objects/SubscribeUpdateManyMutationInput.schema';
import { SubscribeWhereInputObjectSchema as SubscribeWhereInputObjectSchema } from './objects/SubscribeWhereInput.schema';

export const SubscribeUpdateManySchema: z.ZodType<Prisma.SubscribeUpdateManyArgs> = z.object({ data: SubscribeUpdateManyMutationInputObjectSchema, where: SubscribeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SubscribeUpdateManyArgs>;

export const SubscribeUpdateManyZodSchema = z.object({ data: SubscribeUpdateManyMutationInputObjectSchema, where: SubscribeWhereInputObjectSchema.optional() }).strict();