# ElectronicCertificateRefundDataResponse

Данные от ФЭС НСПК для возврата на электронный сертификат.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basket_id** | **string** | Идентификатор корзины возврата, сформированной в НСПК. | [default to undefined]
**amount** | [**MonetaryAmount**](MonetaryAmount.md) | Сумма, которая вернется на электронный сертификат. | [default to undefined]

## Example

```typescript
import { ElectronicCertificateRefundDataResponse } from 'yookassa-client';

const instance: ElectronicCertificateRefundDataResponse = {
    basket_id,
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
