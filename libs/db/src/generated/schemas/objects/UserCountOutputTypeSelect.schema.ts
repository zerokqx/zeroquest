import * as z from 'zod';
import type { Prisma } from '../../client';
import { UserCountOutputTypeCountSubscribesArgsObjectSchema as UserCountOutputTypeCountSubscribesArgsObjectSchema } from './UserCountOutputTypeCountSubscribesArgs.schema';
import { UserCountOutputTypeCountPaymentsArgsObjectSchema as UserCountOutputTypeCountPaymentsArgsObjectSchema } from './UserCountOutputTypeCountPaymentsArgs.schema';
import { UserCountOutputTypeCountLegalAcceptancesArgsObjectSchema as UserCountOutputTypeCountLegalAcceptancesArgsObjectSchema } from './UserCountOutputTypeCountLegalAcceptancesArgs.schema'

const makeSchema = () => z.object({
  subscribes: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountSubscribesArgsObjectSchema)]).optional(),
  payments: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountPaymentsArgsObjectSchema)]).optional(),
  legalAcceptances: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountLegalAcceptancesArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
