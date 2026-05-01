import * as z from 'zod';
export const PlanDeleteManyResultSchema = z.object({
  count: z.number()
});