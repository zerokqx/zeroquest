# SettlementRefundItem

Данные о распределении денег.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**SettlementItemType**](SettlementItemType.md) |  | [default to undefined]
**amount** | [**MonetaryAmount**](MonetaryAmount.md) | Amount by which the seller’s remuneration must be reduced. Must be less than or equal to the refund amount. | [default to undefined]

## Example

```typescript
import { SettlementRefundItem } from 'yookassa-client';

const instance: SettlementRefundItem = {
    type,
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
