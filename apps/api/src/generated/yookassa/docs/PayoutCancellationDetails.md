# PayoutCancellationDetails

Комментарий к статусу canceled: кто отменил выплату и по какой причине.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**party** | **string** | Участник процесса выплаты, который принял решение об отмене транзакции. Перечень инициаторов отмены выплаты: для обычных выплат: https://yookassa.ru/developers/payouts/after-the-payout/declined-payouts#cancellation-details-party, для выплат в рамках Безопасной сделки: https://yookassa.ru/developers/solutions-for-platforms/safe-deal/integration/payouts#declined-payouts-cancellation-details-party. | [default to undefined]
**reason** | **string** | Причина отмены выплаты. Перечень и описание возможных значений: для обычных выплат: https://yookassa.ru/developers/payouts/after-the-payout/declined-payouts#cancellation-details-reason, для выплат в рамках Безопасной сделки: https://yookassa.ru/developers/solutions-for-platforms/safe-deal/integration/payouts#declined-payouts-cancellation-details-reason. | [default to undefined]

## Example

```typescript
import { PayoutCancellationDetails } from 'yookassa-client';

const instance: PayoutCancellationDetails = {
    party,
    reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
