# ElectronicCertificatePayment

Данные от ФЭС НСПК для оплаты по электронному сертификату.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**MonetaryAmount**](MonetaryAmount.md) | Сумма, которая спишется с электронного сертификата. | [default to undefined]
**basket_id** | **string** | Идентификатор корзины покупки, сформированной в НСПК. | [default to undefined]

## Example

```typescript
import { ElectronicCertificatePayment } from 'yookassa-client';

const instance: ElectronicCertificatePayment = {
    amount,
    basket_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
