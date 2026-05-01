import type { Prisma } from '../client';
import * as z from 'zod';
import { InboundSelectObjectSchema as InboundSelectObjectSchema } from './objects/InboundSelect.schema';
import { InboundUpdateManyMutationInputObjectSchema as InboundUpdateManyMutationInputObjectSchema } from './objects/InboundUpdateManyMutationInput.schema';
import { InboundWhereInputObjectSchema as InboundWhereInputObjectSchema } from './objects/InboundWhereInput.schema';

export const InboundUpdateManyAndReturnSchema: z.ZodType<Prisma.InboundUpdateManyAndReturnArgs> = z.object({ select: InboundSelectObjectSchema.optional(), data: InboundUpdateManyMutationInputObjectSchema, where: InboundWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.InboundUpdateManyAndReturnArgs>;

export const InboundUpdateManyAndReturnZodSchema = z.object({ select: InboundSelectObjectSchema.optional(), data: InboundUpdateManyMutationInputObjectSchema, where: InboundWhereInputObjectSchema.optional() }).strict();