import type { Prisma } from '../client';
import * as z from 'zod';
import { IpSelectObjectSchema as IpSelectObjectSchema } from './objects/IpSelect.schema';
import { IpWhereUniqueInputObjectSchema as IpWhereUniqueInputObjectSchema } from './objects/IpWhereUniqueInput.schema';

export const IpDeleteOneSchema: z.ZodType<Prisma.IpDeleteArgs> = z.object({ select: IpSelectObjectSchema.optional(),  where: IpWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.IpDeleteArgs>;

export const IpDeleteOneZodSchema = z.object({ select: IpSelectObjectSchema.optional(),  where: IpWhereUniqueInputObjectSchema }).strict();