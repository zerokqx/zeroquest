# RefundDealData

Данные о сделке, в составе которой проходит возврат. Необходимо передавать, если вы проводите Безопасную сделку: https://yookassa.ru/developers/solutions-for-platforms/safe-deal/basics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**refund_settlements** | [**Array&lt;SettlementRefundArrayInner&gt;**](SettlementRefundArrayInner.md) | Данные о распределении денег. | [default to undefined]

## Example

```typescript
import { RefundDealData } from 'yookassa-client';

const instance: RefundDealData = {
    refund_settlements,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
