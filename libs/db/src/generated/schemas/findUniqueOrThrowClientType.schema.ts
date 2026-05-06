import type { Prisma } from '../client';
import * as z from 'zod';
import { ClientTypeSelectObjectSchema as ClientTypeSelectObjectSchema } from './objects/ClientTypeSelect.schema';
import { ClientTypeWhereUniqueInputObjectSchema as ClientTypeWhereUniqueInputObjectSchema } from './objects/ClientTypeWhereUniqueInput.schema';

export const ClientTypeFindUniqueOrThrowSchema: z.ZodType<Prisma.ClientTypeFindUniqueOrThrowArgs> = z.object({ select: ClientTypeSelectObjectSchema.optional(),  where: ClientTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ClientTypeFindUniqueOrThrowArgs>;

export const ClientTypeFindUniqueOrThrowZodSchema = z.object({ select: ClientTypeSelectObjectSchema.optional(),  where: ClientTypeWhereUniqueInputObjectSchema }).strict();