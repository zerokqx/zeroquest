import * as z from 'zod';
import type { Prisma } from '../../client';
import { TotpMfaWhereUniqueInputObjectSchema as TotpMfaWhereUniqueInputObjectSchema } from './TotpMfaWhereUniqueInput.schema';
import { TotpMfaCreateWithoutUserInputObjectSchema as TotpMfaCreateWithoutUserInputObjectSchema } from './TotpMfaCreateWithoutUserInput.schema';
import { TotpMfaUncheckedCreateWithoutUserInputObjectSchema as TotpMfaUncheckedCreateWithoutUserInputObjectSchema } from './TotpMfaUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TotpMfaWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TotpMfaCreateWithoutUserInputObjectSchema), z.lazy(() => TotpMfaUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const TotpMfaCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.TotpMfaCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TotpMfaCreateOrConnectWithoutUserInput>;
export const TotpMfaCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
