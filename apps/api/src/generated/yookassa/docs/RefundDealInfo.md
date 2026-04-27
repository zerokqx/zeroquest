# RefundDealInfo

Данные о сделке, в составе которой проходит возврат. Присутствует, если вы проводите Безопасную сделку: https://yookassa.ru/developers/solutions-for-platforms/safe-deal/basics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Идентификатор сделки. Берется из возвращаемого платежа. | [default to undefined]
**refund_settlements** | [**Array&lt;SettlementRefundArrayInner&gt;**](SettlementRefundArrayInner.md) | Данные о распределении денег. | [default to undefined]

## Example

```typescript
import { RefundDealInfo } from 'yookassa-client';

const instance: RefundDealInfo = {
    id,
    refund_settlements,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
