import * as z from 'zod';

export const PlanScalarFieldEnumSchema = z.enum(['id', 'name', 'isSpecial', 'discountedPercent', 'features', 'price', 'description', 'totalGb', 'inboundId', 'duratationDays'])

export type PlanScalarFieldEnum = z.infer<typeof PlanScalarFieldEnumSchema>;