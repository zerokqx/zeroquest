# ElectronicCertificateRefundMethod

Возврат платежа по электронному сертификату.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**electronic_certificate** | [**ElectronicCertificateRefundDataResponse**](ElectronicCertificateRefundDataResponse.md) |  | [optional] [default to undefined]
**articles** | [**Array&lt;ElectronicCertificateRefundArticle&gt;**](ElectronicCertificateRefundArticle.md) | Корзина возврата — список возвращаемых товаров, для оплаты которых использовался электронный сертификат. Присутствует, если оплата была на готовой странице ЮKassa: https://yookassa.ru/developers/payment-acceptance/integration-scenarios/manual-integration/other/electronic-certificate/ready-made-payment-form. | [optional] [default to undefined]

## Example

```typescript
import { ElectronicCertificateRefundMethod } from 'yookassa-client';

const instance: ElectronicCertificateRefundMethod = {
    electronic_certificate,
    articles,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
