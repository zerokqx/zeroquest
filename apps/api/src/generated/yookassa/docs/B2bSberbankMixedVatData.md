# B2bSberbankMixedVatData

Данные об НДС, если создается платеж на несколько товаров или услуг с разными ставками НДС (в параметре type передано значение mixed).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**MonetaryAmount**](MonetaryAmount.md) | Сумма НДС. | [default to undefined]

## Example

```typescript
import { B2bSberbankMixedVatData } from 'yookassa-client';

const instance: B2bSberbankMixedVatData = {
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
