import { isIP } from 'is-ip';
import { z } from 'zod';

export const LookupSchema = z.object({
  /** [ <low bound of IP block>, <high bound of IP block> ] */
  range: z.tuple([z.number(), z.number()]).optional(),

  /** 2 letter ISO-3166-1 country code https://www.iban.com/country-codes */
  country: z.string().optional(),

  /**
   * Up to 3 alphanumeric variable length characters as ISO 3166-2 code
   * For US states this is the 2 letter state
   * For the United Kingdom this could be ENG as a country like “England
   * FIPS 10-4 subcountry code
   */
  region: z.string().optional(),

  /** 1 if the country is a member state of the European Union, 0 otherwise. */
  eu: z.enum(['1', '0']).optional(),

  /** "Country/Zone" Timezone from IANA Time Zone Database */
  timezone: z.string().optional(),

  /** This is the full city name */
  city: z.string().optional(),

  /** The latitude and longitude of the city */
  ll: z.tuple([z.number(), z.number()]).optional(),

  /** Metro code */
  metro: z.number().optional(),

  /** The approximate accuracy radius (km), around the latitude and longitude */
  area: z.number().optional(),
});

export const IPSchema = z
  .string()
  .refine((val) => isIP(val), { message: 'Invalide IP' });

export type LookupSchemaType = z.infer<typeof LookupSchema>;
