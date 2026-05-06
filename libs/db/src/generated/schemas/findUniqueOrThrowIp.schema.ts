import type { Prisma } from '../client';
import * as z from 'zod';
import { IpSelectObjectSchema as IpSelectObjectSchema } from './objects/IpSelect.schema';
import { IpWhereUniqueInputObjectSchema as IpWhereUniqueInputObjectSchema } from './objects/IpWhereUniqueInput.schema';

export const IpFindUniqueOrThrowSchema: z.ZodType<Prisma.IpFindUniqueOrThrowArgs> = z.object({ select: IpSelectObjectSchema.optional(),  where: IpWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.IpFindUniqueOrThrowArgs>;

export const IpFindUniqueOrThrowZodSchema = z.object({ select: IpSelectObjectSchema.optional(),  where: IpWhereUniqueInputObjectSchema }).strict();