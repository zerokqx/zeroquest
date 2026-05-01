import type { Prisma } from '../client';
import * as z from 'zod';
import { InboundWhereInputObjectSchema as InboundWhereInputObjectSchema } from './objects/InboundWhereInput.schema';

export const InboundDeleteManySchema: z.ZodType<Prisma.InboundDeleteManyArgs> = z.object({ where: InboundWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.InboundDeleteManyArgs>;

export const InboundDeleteManyZodSchema = z.object({ where: InboundWhereInputObjectSchema.optional() }).strict();