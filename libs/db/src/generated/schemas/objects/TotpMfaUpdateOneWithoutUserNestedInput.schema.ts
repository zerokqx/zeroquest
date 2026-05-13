import * as z from 'zod';
import type { Prisma } from '../../client';
import { TotpMfaCreateWithoutUserInputObjectSchema as TotpMfaCreateWithoutUserInputObjectSchema } from './TotpMfaCreateWithoutUserInput.schema';
import { TotpMfaUncheckedCreateWithoutUserInputObjectSchema as TotpMfaUncheckedCreateWithoutUserInputObjectSchema } from './TotpMfaUncheckedCreateWithoutUserInput.schema';
import { TotpMfaCreateOrConnectWithoutUserInputObjectSchema as TotpMfaCreateOrConnectWithoutUserInputObjectSchema } from './TotpMfaCreateOrConnectWithoutUserInput.schema';
import { TotpMfaUpsertWithoutUserInputObjectSchema as TotpMfaUpsertWithoutUserInputObjectSchema } from './TotpMfaUpsertWithoutUserInput.schema';
import { TotpMfaWhereInputObjectSchema as TotpMfaWhereInputObjectSchema } from './TotpMfaWhereInput.schema';
import { TotpMfaWhereUniqueInputObjectSchema as TotpMfaWhereUniqueInputObjectSchema } from './TotpMfaWhereUniqueInput.schema';
import { TotpMfaUpdateToOneWithWhereWithoutUserInputObjectSchema as TotpMfaUpdateToOneWithWhereWithoutUserInputObjectSchema } from './TotpMfaUpdateToOneWithWhereWithoutUserInput.schema';
import { TotpMfaUpdateWithoutUserInputObjectSchema as TotpMfaUpdateWithoutUserInputObjectSchema } from './TotpMfaUpdateWithoutUserInput.schema';
import { TotpMfaUncheckedUpdateWithoutUserInputObjectSchema as TotpMfaUncheckedUpdateWithoutUserInputObjectSchema } from './TotpMfaUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TotpMfaCreateWithoutUserInputObjectSchema), z.lazy(() => TotpMfaUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TotpMfaCreateOrConnectWithoutUserInputObjectSchema).optional(),
  upsert: z.lazy(() => TotpMfaUpsertWithoutUserInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => TotpMfaWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => TotpMfaWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => TotpMfaWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TotpMfaUpdateToOneWithWhereWithoutUserInputObjectSchema), z.lazy(() => TotpMfaUpdateWithoutUserInputObjectSchema), z.lazy(() => TotpMfaUncheckedUpdateWithoutUserInputObjectSchema)]).optional()
}).strict();
export const TotpMfaUpdateOneWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.TotpMfaUpdateOneWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TotpMfaUpdateOneWithoutUserNestedInput>;
export const TotpMfaUpdateOneWithoutUserNestedInputObjectZodSchema = makeSchema();
