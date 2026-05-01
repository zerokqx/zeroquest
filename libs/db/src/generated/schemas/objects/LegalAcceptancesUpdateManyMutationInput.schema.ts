import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  
}).strict();
export const LegalAcceptancesUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.LegalAcceptancesUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.LegalAcceptancesUpdateManyMutationInput>;
export const LegalAcceptancesUpdateManyMutationInputObjectZodSchema = makeSchema();
