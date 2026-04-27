# AirlineLeg

Информация о перелете.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**departure_airport** | **string** | Code of the departure airport according to IATA: https://www.iata.org/publications/Pages/code-search.aspx, for example, LED. | [default to undefined]
**destination_airport** | **string** | Code of the arrival airport according to IATA: https://www.iata.org/publications/Pages/code-search.aspx, for example, AMS. | [default to undefined]
**departure_date** | **string** | Departure date in the YYYY-MM-DD ISO 8601:2004: http://www.iso.org/iso/catalogue_detail?csnumber&#x3D;40874 format. | [default to undefined]
**carrier_code** | **string** | Airline code according to IATA: https://www.iata.org/publications/Pages/code-search.aspx. | [optional] [default to undefined]

## Example

```typescript
import { AirlineLeg } from 'yookassa-client';

const instance: AirlineLeg = {
    departure_airport,
    destination_airport,
    departure_date,
    carrier_code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
