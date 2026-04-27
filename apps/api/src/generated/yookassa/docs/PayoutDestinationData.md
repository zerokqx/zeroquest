# PayoutDestinationData

Данные платежного средства, на которое нужно сделать выплату. Обязательный параметр, если не передан payout_token или payment_method_id. Выплаты через СБП доступны только при обычных выплатах и только при выплатах физическим лицам.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**PayoutDestinationDataType**](PayoutDestinationDataType.md) |  | [default to undefined]

## Example

```typescript
import { PayoutDestinationData } from 'yookassa-client';

const instance: PayoutDestinationData = {
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
