import * as z from 'zod';
// prettier-ignore
export const PlanModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    isSpecial: z.boolean(),
    discountedPercent: z.number(),
    features: z.string().nullable(),
    price: z.number().int(),
    description: z.string().nullable(),
    totalGb: z.number().int(),
    payments: z.array(z.unknown()),
    subscribes: z.array(z.unknown()),
    inbound: z.unknown(),
    inboundId: z.number().int(),
    duratationDays: z.number().int()
}).strict();

export type PlanPureType = z.infer<typeof PlanModelSchema>;
