import type { Prisma } from '../client';
import * as z from 'zod';
import { IpSelectObjectSchema as IpSelectObjectSchema } from './objects/IpSelect.schema';
import { IpWhereUniqueInputObjectSchema as IpWhereUniqueInputObjectSchema } from './objects/IpWhereUniqueInput.schema';

export const IpFindUniqueSchema: z.ZodType<Prisma.IpFindUniqueArgs> = z.object({ select: IpSelectObjectSchema.optional(),  where: IpWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.IpFindUniqueArgs>;

export const IpFindUniqueZodSchema = z.object({ select: IpSelectObjectSchema.optional(),  where: IpWhereUniqueInputObjectSchema }).strict();