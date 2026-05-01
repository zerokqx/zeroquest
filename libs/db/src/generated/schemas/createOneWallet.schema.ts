import type { Prisma } from '../client';
import * as z from 'zod';
import { WalletSelectObjectSchema as WalletSelectObjectSchema } from './objects/WalletSelect.schema';
import { WalletIncludeObjectSchema as WalletIncludeObjectSchema } from './objects/WalletInclude.schema';
import { WalletCreateInputObjectSchema as WalletCreateInputObjectSchema } from './objects/WalletCreateInput.schema';
import { WalletUncheckedCreateInputObjectSchema as WalletUncheckedCreateInputObjectSchema } from './objects/WalletUncheckedCreateInput.schema';

export const WalletCreateOneSchema: z.ZodType<Prisma.WalletCreateArgs> = z.object({ select: WalletSelectObjectSchema.optional(), include: WalletIncludeObjectSchema.optional(), data: z.union([WalletCreateInputObjectSchema, WalletUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.WalletCreateArgs>;

export const WalletCreateOneZodSchema = z.object({ select: WalletSelectObjectSchema.optional(), include: WalletIncludeObjectSchema.optional(), data: z.union([WalletCreateInputObjectSchema, WalletUncheckedCreateInputObjectSchema]) }).strict();