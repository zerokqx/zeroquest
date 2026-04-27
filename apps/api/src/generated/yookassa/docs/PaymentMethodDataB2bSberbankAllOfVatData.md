# PaymentMethodDataB2bSberbankAllOfVatData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**B2bSberbankVatDataType**](B2bSberbankVatDataType.md) |  | [default to undefined]
**rate** | **string** | Tax rate (in percentage). Possible values: 5, 7, 10, 20 and 22. Starting January 1, 2026, the 22% VAT rate applies instead of the 20% rate. | [default to undefined]
**amount** | [**MonetaryAmount**](MonetaryAmount.md) | Сумма НДС. | [default to undefined]

## Example

```typescript
import { PaymentMethodDataB2bSberbankAllOfVatData } from 'yookassa-client';

const instance: PaymentMethodDataB2bSberbankAllOfVatData = {
    type,
    rate,
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
