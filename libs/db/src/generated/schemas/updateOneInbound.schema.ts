import type { Prisma } from '../client';
import * as z from 'zod';
import { InboundSelectObjectSchema as InboundSelectObjectSchema } from './objects/InboundSelect.schema';
import { InboundIncludeObjectSchema as InboundIncludeObjectSchema } from './objects/InboundInclude.schema';
import { InboundUpdateInputObjectSchema as InboundUpdateInputObjectSchema } from './objects/InboundUpdateInput.schema';
import { InboundUncheckedUpdateInputObjectSchema as InboundUncheckedUpdateInputObjectSchema } from './objects/InboundUncheckedUpdateInput.schema';
import { InboundWhereUniqueInputObjectSchema as InboundWhereUniqueInputObjectSchema } from './objects/InboundWhereUniqueInput.schema';

export const InboundUpdateOneSchema: z.ZodType<Prisma.InboundUpdateArgs> = z.object({ select: InboundSelectObjectSchema.optional(), include: InboundIncludeObjectSchema.optional(), data: z.union([InboundUpdateInputObjectSchema, InboundUncheckedUpdateInputObjectSchema]), where: InboundWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.InboundUpdateArgs>;

export const InboundUpdateOneZodSchema = z.object({ select: InboundSelectObjectSchema.optional(), include: InboundIncludeObjectSchema.optional(), data: z.union([InboundUpdateInputObjectSchema, InboundUncheckedUpdateInputObjectSchema]), where: InboundWhereUniqueInputObjectSchema }).strict();