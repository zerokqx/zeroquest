import * as z from 'zod';
import type { Prisma } from '../../client';
import { TotpMfaUpdateWithoutUserInputObjectSchema as TotpMfaUpdateWithoutUserInputObjectSchema } from './TotpMfaUpdateWithoutUserInput.schema';
import { TotpMfaUncheckedUpdateWithoutUserInputObjectSchema as TotpMfaUncheckedUpdateWithoutUserInputObjectSchema } from './TotpMfaUncheckedUpdateWithoutUserInput.schema';
import { TotpMfaCreateWithoutUserInputObjectSchema as TotpMfaCreateWithoutUserInputObjectSchema } from './TotpMfaCreateWithoutUserInput.schema';
import { TotpMfaUncheckedCreateWithoutUserInputObjectSchema as TotpMfaUncheckedCreateWithoutUserInputObjectSchema } from './TotpMfaUncheckedCreateWithoutUserInput.schema';
import { TotpMfaWhereInputObjectSchema as TotpMfaWhereInputObjectSchema } from './TotpMfaWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TotpMfaUpdateWithoutUserInputObjectSchema), z.lazy(() => TotpMfaUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => TotpMfaCreateWithoutUserInputObjectSchema), z.lazy(() => TotpMfaUncheckedCreateWithoutUserInputObjectSchema)]),
  where: z.lazy(() => TotpMfaWhereInputObjectSchema).optional()
}).strict();
export const TotpMfaUpsertWithoutUserInputObjectSchema: z.ZodType<Prisma.TotpMfaUpsertWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TotpMfaUpsertWithoutUserInput>;
export const TotpMfaUpsertWithoutUserInputObjectZodSchema = makeSchema();
