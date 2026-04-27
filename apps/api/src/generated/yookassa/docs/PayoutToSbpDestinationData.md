# PayoutToSbpDestinationData

Данные для выплаты на счет в банке через систему быстрых платежей.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone** | **string** | Телефон, к которому привязан счет получателя выплаты в системе участника СБП. Указывается в формате ITU-T E.164: https://ru.wikipedia.org/wiki/E.164, например 79000000000. | [default to undefined]
**bank_id** | **string** | FPS participant ID, a bank or payment service connected to the service. Maximum 12 characters. How to get an FPS participant ID: https://yookassa.ru/developers/payouts/making-payouts/sbp | [default to undefined]

## Example

```typescript
import { PayoutToSbpDestinationData } from 'yookassa-client';

const instance: PayoutToSbpDestinationData = {
    phone,
    bank_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
