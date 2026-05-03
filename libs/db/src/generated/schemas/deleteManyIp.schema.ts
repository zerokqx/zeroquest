import type { Prisma } from '../client';
import * as z from 'zod';
import { IpWhereInputObjectSchema as IpWhereInputObjectSchema } from './objects/IpWhereInput.schema';

export const IpDeleteManySchema: z.ZodType<Prisma.IpDeleteManyArgs> = z.object({ where: IpWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.IpDeleteManyArgs>;

export const IpDeleteManyZodSchema = z.object({ where: IpWhereInputObjectSchema.optional() }).strict();