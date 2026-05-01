import type { Prisma } from '../client';
import * as z from 'zod';
import { WalletSelectObjectSchema as WalletSelectObjectSchema } from './objects/WalletSelect.schema';
import { WalletIncludeObjectSchema as WalletIncludeObjectSchema } from './objects/WalletInclude.schema';
import { WalletWhereUniqueInputObjectSchema as WalletWhereUniqueInputObjectSchema } from './objects/WalletWhereUniqueInput.schema';

export const WalletFindUniqueOrThrowSchema: z.ZodType<Prisma.WalletFindUniqueOrThrowArgs> = z.object({ select: WalletSelectObjectSchema.optional(), include: WalletIncludeObjectSchema.optional(), where: WalletWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WalletFindUniqueOrThrowArgs>;

export const WalletFindUniqueOrThrowZodSchema = z.object({ select: WalletSelectObjectSchema.optional(), include: WalletIncludeObjectSchema.optional(), where: WalletWhereUniqueInputObjectSchema }).strict();