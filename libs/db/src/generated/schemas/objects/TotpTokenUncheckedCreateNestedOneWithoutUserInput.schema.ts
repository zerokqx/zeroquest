import * as z from 'zod';
import type { Prisma } from '../../client';
import { TotpTokenCreateWithoutUserInputObjectSchema as TotpTokenCreateWithoutUserInputObjectSchema } from './TotpTokenCreateWithoutUserInput.schema';
import { TotpTokenUncheckedCreateWithoutUserInputObjectSchema as TotpTokenUncheckedCreateWithoutUserInputObjectSchema } from './TotpTokenUncheckedCreateWithoutUserInput.schema';
import { TotpTokenCreateOrConnectWithoutUserInputObjectSchema as TotpTokenCreateOrConnectWithoutUserInputObjectSchema } from './TotpTokenCreateOrConnectWithoutUserInput.schema';
import { TotpTokenWhereUniqueInputObjectSchema as TotpTokenWhereUniqueInputObjectSchema } from './TotpTokenWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TotpTokenCreateWithoutUserInputObjectSchema), z.lazy(() => TotpTokenUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TotpTokenCreateOrConnectWithoutUserInputObjectSchema).optional(),
  connect: z.lazy(() => TotpTokenWhereUniqueInputObjectSchema).optional()
}).strict();
export const TotpTokenUncheckedCreateNestedOneWithoutUserInputObjectSchema: z.ZodType<Prisma.TotpTokenUncheckedCreateNestedOneWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TotpTokenUncheckedCreateNestedOneWithoutUserInput>;
export const TotpTokenUncheckedCreateNestedOneWithoutUserInputObjectZodSchema = makeSchema();
