import * as z from 'zod';
import type { Prisma } from '../../client';
import { IpStatusSchema } from '../enums/IpStatus.schema'

const makeSchema = () => z.object({
  set: IpStatusSchema.optional()
}).strict();
export const EnumIpStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumIpStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumIpStatusFieldUpdateOperationsInput>;
export const EnumIpStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
