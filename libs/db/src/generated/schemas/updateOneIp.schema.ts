import type { Prisma } from '../client';
import * as z from 'zod';
import { IpSelectObjectSchema as IpSelectObjectSchema } from './objects/IpSelect.schema';
import { IpUpdateInputObjectSchema as IpUpdateInputObjectSchema } from './objects/IpUpdateInput.schema';
import { IpUncheckedUpdateInputObjectSchema as IpUncheckedUpdateInputObjectSchema } from './objects/IpUncheckedUpdateInput.schema';
import { IpWhereUniqueInputObjectSchema as IpWhereUniqueInputObjectSchema } from './objects/IpWhereUniqueInput.schema';

export const IpUpdateOneSchema: z.ZodType<Prisma.IpUpdateArgs> = z.object({ select: IpSelectObjectSchema.optional(),  data: z.union([IpUpdateInputObjectSchema, IpUncheckedUpdateInputObjectSchema]), where: IpWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.IpUpdateArgs>;

export const IpUpdateOneZodSchema = z.object({ select: IpSelectObjectSchema.optional(),  data: z.union([IpUpdateInputObjectSchema, IpUncheckedUpdateInputObjectSchema]), where: IpWhereUniqueInputObjectSchema }).strict();