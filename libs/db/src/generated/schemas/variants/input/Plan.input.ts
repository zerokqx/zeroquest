import * as z from 'zod';
// prettier-ignore
export const PlanInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    isSpecial: z.boolean(),
    discountedPercent: z.number(),
    features: z.string().optional().nullable(),
    price: z.number().int(),
    description: z.string().optional().nullable(),
    totalGb: z.number().int(),
    payments: z.array(z.unknown()),
    subscribes: z.array(z.unknown()),
    inbound: z.unknown(),
    inboundId: z.number().int(),
    duratationDays: z.number().int()
}).strict();

export type PlanInputType = z.infer<typeof PlanInputSchema>;
