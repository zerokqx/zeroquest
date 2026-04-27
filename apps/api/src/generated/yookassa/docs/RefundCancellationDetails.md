# RefundCancellationDetails

Комментарий к статусу canceled: кто отменил возврат и по какой причине.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**party** | **string** | Участник процесса возврата, который принял решение отменить транзакцию. Перечень и описание возможных значений: https://yookassa.ru/developers/payment-acceptance/after-the-payment/refunds#declined-refunds-cancellation-details-party | [default to undefined]
**reason** | **string** | Причина отмены возврата. Перечень и описание возможных значений: https://yookassa.ru/developers/payment-acceptance/after-the-payment/refunds#declined-refunds-cancellation-details-reason | [default to undefined]

## Example

```typescript
import { RefundCancellationDetails } from 'yookassa-client';

const instance: RefundCancellationDetails = {
    party,
    reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
