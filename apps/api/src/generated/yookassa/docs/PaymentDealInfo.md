# PaymentDealInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Идентификатор сделки. | [default to undefined]
**settlements** | [**Array&lt;SettlementPaymentArrayInner&gt;**](SettlementPaymentArrayInner.md) | Данные о распределении денег. | [default to undefined]

## Example

```typescript
import { PaymentDealInfo } from 'yookassa-client';

const instance: PaymentDealInfo = {
    id,
    settlements,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
