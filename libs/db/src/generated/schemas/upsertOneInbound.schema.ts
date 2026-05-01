import type { Prisma } from '../client';
import * as z from 'zod';
import { InboundSelectObjectSchema as InboundSelectObjectSchema } from './objects/InboundSelect.schema';
import { InboundIncludeObjectSchema as InboundIncludeObjectSchema } from './objects/InboundInclude.schema';
import { InboundWhereUniqueInputObjectSchema as InboundWhereUniqueInputObjectSchema } from './objects/InboundWhereUniqueInput.schema';
import { InboundCreateInputObjectSchema as InboundCreateInputObjectSchema } from './objects/InboundCreateInput.schema';
import { InboundUncheckedCreateInputObjectSchema as InboundUncheckedCreateInputObjectSchema } from './objects/InboundUncheckedCreateInput.schema';
import { InboundUpdateInputObjectSchema as InboundUpdateInputObjectSchema } from './objects/InboundUpdateInput.schema';
import { InboundUncheckedUpdateInputObjectSchema as InboundUncheckedUpdateInputObjectSchema } from './objects/InboundUncheckedUpdateInput.schema';

export const InboundUpsertOneSchema: z.ZodType<Prisma.InboundUpsertArgs> = z.object({ select: InboundSelectObjectSchema.optional(), include: InboundIncludeObjectSchema.optional(), where: InboundWhereUniqueInputObjectSchema, create: z.union([ InboundCreateInputObjectSchema, InboundUncheckedCreateInputObjectSchema ]), update: z.union([ InboundUpdateInputObjectSchema, InboundUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.InboundUpsertArgs>;

export const InboundUpsertOneZodSchema = z.object({ select: InboundSelectObjectSchema.optional(), include: InboundIncludeObjectSchema.optional(), where: InboundWhereUniqueInputObjectSchema, create: z.union([ InboundCreateInputObjectSchema, InboundUncheckedCreateInputObjectSchema ]), update: z.union([ InboundUpdateInputObjectSchema, InboundUncheckedUpdateInputObjectSchema ]) }).strict();