import * as z from 'zod';
import type { Prisma } from '../../client';
import { TotpTokenCreateWithoutUserInputObjectSchema as TotpTokenCreateWithoutUserInputObjectSchema } from './TotpTokenCreateWithoutUserInput.schema';
import { TotpTokenUncheckedCreateWithoutUserInputObjectSchema as TotpTokenUncheckedCreateWithoutUserInputObjectSchema } from './TotpTokenUncheckedCreateWithoutUserInput.schema';
import { TotpTokenCreateOrConnectWithoutUserInputObjectSchema as TotpTokenCreateOrConnectWithoutUserInputObjectSchema } from './TotpTokenCreateOrConnectWithoutUserInput.schema';
import { TotpTokenUpsertWithoutUserInputObjectSchema as TotpTokenUpsertWithoutUserInputObjectSchema } from './TotpTokenUpsertWithoutUserInput.schema';
import { TotpTokenWhereInputObjectSchema as TotpTokenWhereInputObjectSchema } from './TotpTokenWhereInput.schema';
import { TotpTokenWhereUniqueInputObjectSchema as TotpTokenWhereUniqueInputObjectSchema } from './TotpTokenWhereUniqueInput.schema';
import { TotpTokenUpdateToOneWithWhereWithoutUserInputObjectSchema as TotpTokenUpdateToOneWithWhereWithoutUserInputObjectSchema } from './TotpTokenUpdateToOneWithWhereWithoutUserInput.schema';
import { TotpTokenUpdateWithoutUserInputObjectSchema as TotpTokenUpdateWithoutUserInputObjectSchema } from './TotpTokenUpdateWithoutUserInput.schema';
import { TotpTokenUncheckedUpdateWithoutUserInputObjectSchema as TotpTokenUncheckedUpdateWithoutUserInputObjectSchema } from './TotpTokenUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TotpTokenCreateWithoutUserInputObjectSchema), z.lazy(() => TotpTokenUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TotpTokenCreateOrConnectWithoutUserInputObjectSchema).optional(),
  upsert: z.lazy(() => TotpTokenUpsertWithoutUserInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => TotpTokenWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => TotpTokenWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => TotpTokenWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TotpTokenUpdateToOneWithWhereWithoutUserInputObjectSchema), z.lazy(() => TotpTokenUpdateWithoutUserInputObjectSchema), z.lazy(() => TotpTokenUncheckedUpdateWithoutUserInputObjectSchema)]).optional()
}).strict();
export const TotpTokenUncheckedUpdateOneWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.TotpTokenUncheckedUpdateOneWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TotpTokenUncheckedUpdateOneWithoutUserNestedInput>;
export const TotpTokenUncheckedUpdateOneWithoutUserNestedInputObjectZodSchema = makeSchema();
