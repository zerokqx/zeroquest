import * as z from 'zod';
import { IpStatusSchema } from '../../enums/IpStatus.schema';
// prettier-ignore
export const IpModelSchema = z.object({
    id: z.number().int(),
    ip: z.string(),
    rangeLow: z.number().int(),
    rangeHigh: z.number().int(),
    country: z.string(),
    region: z.string(),
    eu: z.boolean(),
    timezone: z.string(),
    city: z.string(),
    ll: z.array(z.number()),
    metro: z.number().int(),
    area: z.number().int(),
    status: IpStatusSchema,
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type IpPureType = z.infer<typeof IpModelSchema>;
