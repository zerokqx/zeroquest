import * as z from 'zod';
import type { Prisma } from '../../client';
import { TotpTokenWhereUniqueInputObjectSchema as TotpTokenWhereUniqueInputObjectSchema } from './TotpTokenWhereUniqueInput.schema';
import { TotpTokenCreateWithoutUserInputObjectSchema as TotpTokenCreateWithoutUserInputObjectSchema } from './TotpTokenCreateWithoutUserInput.schema';
import { TotpTokenUncheckedCreateWithoutUserInputObjectSchema as TotpTokenUncheckedCreateWithoutUserInputObjectSchema } from './TotpTokenUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TotpTokenWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TotpTokenCreateWithoutUserInputObjectSchema), z.lazy(() => TotpTokenUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const TotpTokenCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.TotpTokenCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TotpTokenCreateOrConnectWithoutUserInput>;
export const TotpTokenCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
