import * as z from 'zod';
import type { Prisma } from '../../client';
import { TotpMfaWhereInputObjectSchema as TotpMfaWhereInputObjectSchema } from './TotpMfaWhereInput.schema';
import { TotpMfaUpdateWithoutUserInputObjectSchema as TotpMfaUpdateWithoutUserInputObjectSchema } from './TotpMfaUpdateWithoutUserInput.schema';
import { TotpMfaUncheckedUpdateWithoutUserInputObjectSchema as TotpMfaUncheckedUpdateWithoutUserInputObjectSchema } from './TotpMfaUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TotpMfaWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TotpMfaUpdateWithoutUserInputObjectSchema), z.lazy(() => TotpMfaUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const TotpMfaUpdateToOneWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.TotpMfaUpdateToOneWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TotpMfaUpdateToOneWithWhereWithoutUserInput>;
export const TotpMfaUpdateToOneWithWhereWithoutUserInputObjectZodSchema = makeSchema();
