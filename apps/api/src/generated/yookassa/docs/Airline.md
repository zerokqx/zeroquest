# Airline

Объект с данными для продажи авиабилетов: https://yookassa.ru/developers/payment-acceptance/scenario-extensions/airline-tickets. Используется только для платежей банковской картой.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ticket_number** | **string** | Unique ticket number. If you already know the ticket number during payment creation, ticket_number is a required parameter. If you don\&#39;t, specify booking_reference instead of ticket_number. | [optional] [default to undefined]
**booking_reference** | **string** | Booking reference number, required if ticket_number is not specified. | [optional] [default to undefined]
**passengers** | [**Array&lt;AirlinePassenger&gt;**](AirlinePassenger.md) | List of passengers. | [optional] [default to undefined]
**legs** | [**Array&lt;AirlineLeg&gt;**](AirlineLeg.md) | List of flight legs. | [optional] [default to undefined]

## Example

```typescript
import { Airline } from 'yookassa-client';

const instance: Airline = {
    ticket_number,
    booking_reference,
    passengers,
    legs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
