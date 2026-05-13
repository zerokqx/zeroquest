import * as z from 'zod';
import type { Prisma } from '../../client';
import { TotpMfaCreateWithoutUserInputObjectSchema as TotpMfaCreateWithoutUserInputObjectSchema } from './TotpMfaCreateWithoutUserInput.schema';
import { TotpMfaUncheckedCreateWithoutUserInputObjectSchema as TotpMfaUncheckedCreateWithoutUserInputObjectSchema } from './TotpMfaUncheckedCreateWithoutUserInput.schema';
import { TotpMfaCreateOrConnectWithoutUserInputObjectSchema as TotpMfaCreateOrConnectWithoutUserInputObjectSchema } from './TotpMfaCreateOrConnectWithoutUserInput.schema';
import { TotpMfaWhereUniqueInputObjectSchema as TotpMfaWhereUniqueInputObjectSchema } from './TotpMfaWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TotpMfaCreateWithoutUserInputObjectSchema), z.lazy(() => TotpMfaUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TotpMfaCreateOrConnectWithoutUserInputObjectSchema).optional(),
  connect: z.lazy(() => TotpMfaWhereUniqueInputObjectSchema).optional()
}).strict();
export const TotpMfaCreateNestedOneWithoutUserInputObjectSchema: z.ZodType<Prisma.TotpMfaCreateNestedOneWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TotpMfaCreateNestedOneWithoutUserInput>;
export const TotpMfaCreateNestedOneWithoutUserInputObjectZodSchema = makeSchema();
