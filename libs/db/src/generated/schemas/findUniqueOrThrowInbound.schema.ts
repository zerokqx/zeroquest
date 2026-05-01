import type { Prisma } from '../client';
import * as z from 'zod';
import { InboundSelectObjectSchema as InboundSelectObjectSchema } from './objects/InboundSelect.schema';
import { InboundIncludeObjectSchema as InboundIncludeObjectSchema } from './objects/InboundInclude.schema';
import { InboundWhereUniqueInputObjectSchema as InboundWhereUniqueInputObjectSchema } from './objects/InboundWhereUniqueInput.schema';

export const InboundFindUniqueOrThrowSchema: z.ZodType<Prisma.InboundFindUniqueOrThrowArgs> = z.object({ select: InboundSelectObjectSchema.optional(), include: InboundIncludeObjectSchema.optional(), where: InboundWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.InboundFindUniqueOrThrowArgs>;

export const InboundFindUniqueOrThrowZodSchema = z.object({ select: InboundSelectObjectSchema.optional(), include: InboundIncludeObjectSchema.optional(), where: InboundWhereUniqueInputObjectSchema }).strict();