import * as z from 'zod';
import type { Prisma } from '../../client';
import { SubscribeScalarWhereInputObjectSchema as SubscribeScalarWhereInputObjectSchema } from './SubscribeScalarWhereInput.schema';
import { SubscribeUpdateManyMutationInputObjectSchema as SubscribeUpdateManyMutationInputObjectSchema } from './SubscribeUpdateManyMutationInput.schema';
import { SubscribeUncheckedUpdateManyWithoutUserInputObjectSchema as SubscribeUncheckedUpdateManyWithoutUserInputObjectSchema } from './SubscribeUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubscribeScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SubscribeUpdateManyMutationInputObjectSchema), z.lazy(() => SubscribeUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const SubscribeUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.SubscribeUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SubscribeUpdateManyWithWhereWithoutUserInput>;
export const SubscribeUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
