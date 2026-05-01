import type { Prisma } from '../client';
import * as z from 'zod';
import { InboundSelectObjectSchema as InboundSelectObjectSchema } from './objects/InboundSelect.schema';
import { InboundIncludeObjectSchema as InboundIncludeObjectSchema } from './objects/InboundInclude.schema';
import { InboundWhereUniqueInputObjectSchema as InboundWhereUniqueInputObjectSchema } from './objects/InboundWhereUniqueInput.schema';

export const InboundDeleteOneSchema: z.ZodType<Prisma.InboundDeleteArgs> = z.object({ select: InboundSelectObjectSchema.optional(), include: InboundIncludeObjectSchema.optional(), where: InboundWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.InboundDeleteArgs>;

export const InboundDeleteOneZodSchema = z.object({ select: InboundSelectObjectSchema.optional(), include: InboundIncludeObjectSchema.optional(), where: InboundWhereUniqueInputObjectSchema }).strict();