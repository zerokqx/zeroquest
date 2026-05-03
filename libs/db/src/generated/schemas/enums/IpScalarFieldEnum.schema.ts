import * as z from 'zod';

export const IpScalarFieldEnumSchema = z.enum(['id', 'ip', 'rangeLow', 'rangeHigh', 'country', 'region', 'eu', 'timezone', 'city', 'll', 'metro', 'area', 'status', 'createdAt', 'updatedAt'])

export type IpScalarFieldEnum = z.infer<typeof IpScalarFieldEnumSchema>;