import * as z from 'zod';
import type { Prisma } from '../../client';
import { SubscribeStatusSchema } from '../enums/SubscribeStatus.schema'

const makeSchema = () => z.object({
  set: SubscribeStatusSchema.optional()
}).strict();
export const EnumSubscribeStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumSubscribeStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumSubscribeStatusFieldUpdateOperationsInput>;
export const EnumSubscribeStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
