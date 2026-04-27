# B2bSberbankCalculatedVatData

Данные об НДС, если товар или услуга облагается налогом (в параметре type передано значение calculated).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rate** | **string** | Tax rate (in percentage). Possible values: 5, 7, 10, 20 and 22. Starting January 1, 2026, the 22% VAT rate applies instead of the 20% rate. | [default to undefined]
**amount** | [**MonetaryAmount**](MonetaryAmount.md) | Сумма НДС. | [default to undefined]

## Example

```typescript
import { B2bSberbankCalculatedVatData } from 'yookassa-client';

const instance: B2bSberbankCalculatedVatData = {
    rate,
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
