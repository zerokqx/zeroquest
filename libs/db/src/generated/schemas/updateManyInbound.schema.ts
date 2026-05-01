import type { Prisma } from '../client';
import * as z from 'zod';
import { InboundUpdateManyMutationInputObjectSchema as InboundUpdateManyMutationInputObjectSchema } from './objects/InboundUpdateManyMutationInput.schema';
import { InboundWhereInputObjectSchema as InboundWhereInputObjectSchema } from './objects/InboundWhereInput.schema';

export const InboundUpdateManySchema: z.ZodType<Prisma.InboundUpdateManyArgs> = z.object({ data: InboundUpdateManyMutationInputObjectSchema, where: InboundWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.InboundUpdateManyArgs>;

export const InboundUpdateManyZodSchema = z.object({ data: InboundUpdateManyMutationInputObjectSchema, where: InboundWhereInputObjectSchema.optional() }).strict();