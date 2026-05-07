import * as z from 'zod';
import type { Prisma } from '../../client';
import { TotpTokenWhereInputObjectSchema as TotpTokenWhereInputObjectSchema } from './TotpTokenWhereInput.schema';
import { TotpTokenUpdateWithoutUserInputObjectSchema as TotpTokenUpdateWithoutUserInputObjectSchema } from './TotpTokenUpdateWithoutUserInput.schema';
import { TotpTokenUncheckedUpdateWithoutUserInputObjectSchema as TotpTokenUncheckedUpdateWithoutUserInputObjectSchema } from './TotpTokenUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TotpTokenWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TotpTokenUpdateWithoutUserInputObjectSchema), z.lazy(() => TotpTokenUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const TotpTokenUpdateToOneWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.TotpTokenUpdateToOneWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TotpTokenUpdateToOneWithWhereWithoutUserInput>;
export const TotpTokenUpdateToOneWithWhereWithoutUserInputObjectZodSchema = makeSchema();
