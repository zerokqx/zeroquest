import * as z from 'zod';
import type { Prisma } from '../../client';
import { TotpTokenUpdateWithoutUserInputObjectSchema as TotpTokenUpdateWithoutUserInputObjectSchema } from './TotpTokenUpdateWithoutUserInput.schema';
import { TotpTokenUncheckedUpdateWithoutUserInputObjectSchema as TotpTokenUncheckedUpdateWithoutUserInputObjectSchema } from './TotpTokenUncheckedUpdateWithoutUserInput.schema';
import { TotpTokenCreateWithoutUserInputObjectSchema as TotpTokenCreateWithoutUserInputObjectSchema } from './TotpTokenCreateWithoutUserInput.schema';
import { TotpTokenUncheckedCreateWithoutUserInputObjectSchema as TotpTokenUncheckedCreateWithoutUserInputObjectSchema } from './TotpTokenUncheckedCreateWithoutUserInput.schema';
import { TotpTokenWhereInputObjectSchema as TotpTokenWhereInputObjectSchema } from './TotpTokenWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TotpTokenUpdateWithoutUserInputObjectSchema), z.lazy(() => TotpTokenUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => TotpTokenCreateWithoutUserInputObjectSchema), z.lazy(() => TotpTokenUncheckedCreateWithoutUserInputObjectSchema)]),
  where: z.lazy(() => TotpTokenWhereInputObjectSchema).optional()
}).strict();
export const TotpTokenUpsertWithoutUserInputObjectSchema: z.ZodType<Prisma.TotpTokenUpsertWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TotpTokenUpsertWithoutUserInput>;
export const TotpTokenUpsertWithoutUserInputObjectZodSchema = makeSchema();
