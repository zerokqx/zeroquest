# CapturePaymentDeal

The deal within which the payment is being carried out. Specified for partially capturing a payment if you use Safe deal: https://yookassa.ru/developers/solutions-for-platforms/safe-deal/basics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settlements** | [**Array&lt;SettlementPaymentArrayInner&gt;**](SettlementPaymentArrayInner.md) | Данные о распределении денег. | [default to undefined]

## Example

```typescript
import { CapturePaymentDeal } from 'yookassa-client';

const instance: CapturePaymentDeal = {
    settlements,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
