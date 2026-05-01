import type { Prisma } from '../client';
import * as z from 'zod';
import { InboundSelectObjectSchema as InboundSelectObjectSchema } from './objects/InboundSelect.schema';
import { InboundIncludeObjectSchema as InboundIncludeObjectSchema } from './objects/InboundInclude.schema';
import { InboundCreateInputObjectSchema as InboundCreateInputObjectSchema } from './objects/InboundCreateInput.schema';
import { InboundUncheckedCreateInputObjectSchema as InboundUncheckedCreateInputObjectSchema } from './objects/InboundUncheckedCreateInput.schema';

export const InboundCreateOneSchema: z.ZodType<Prisma.InboundCreateArgs> = z.object({ select: InboundSelectObjectSchema.optional(), include: InboundIncludeObjectSchema.optional(), data: z.union([InboundCreateInputObjectSchema, InboundUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.InboundCreateArgs>;

export const InboundCreateOneZodSchema = z.object({ select: InboundSelectObjectSchema.optional(), include: InboundIncludeObjectSchema.optional(), data: z.union([InboundCreateInputObjectSchema, InboundUncheckedCreateInputObjectSchema]) }).strict();