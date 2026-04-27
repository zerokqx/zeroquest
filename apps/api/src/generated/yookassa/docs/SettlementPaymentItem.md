# SettlementPaymentItem

Данные о распределении денег.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**SettlementItemType**](SettlementItemType.md) |  | [default to undefined]
**amount** | [**MonetaryAmount**](MonetaryAmount.md) | Сумма вознаграждения продавца. | [default to undefined]

## Example

```typescript
import { SettlementPaymentItem } from 'yookassa-client';

const instance: SettlementPaymentItem = {
    type,
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
