import type { Prisma } from '../client';
import * as z from 'zod';
import { InboundSelectObjectSchema as InboundSelectObjectSchema } from './objects/InboundSelect.schema';
import { InboundIncludeObjectSchema as InboundIncludeObjectSchema } from './objects/InboundInclude.schema';
import { InboundWhereUniqueInputObjectSchema as InboundWhereUniqueInputObjectSchema } from './objects/InboundWhereUniqueInput.schema';

export const InboundFindUniqueSchema: z.ZodType<Prisma.InboundFindUniqueArgs> = z.object({ select: InboundSelectObjectSchema.optional(), include: InboundIncludeObjectSchema.optional(), where: InboundWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.InboundFindUniqueArgs>;

export const InboundFindUniqueZodSchema = z.object({ select: InboundSelectObjectSchema.optional(), include: InboundIncludeObjectSchema.optional(), where: InboundWhereUniqueInputObjectSchema }).strict();