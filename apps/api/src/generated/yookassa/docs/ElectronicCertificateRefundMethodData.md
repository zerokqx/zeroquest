# ElectronicCertificateRefundMethodData

Данные для возврата платежа по электронному сертификату.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**electronic_certificate** | [**ElectronicCertificateRefundDataRequest**](ElectronicCertificateRefundDataRequest.md) |  | [optional] [default to undefined]
**articles** | [**Array&lt;ElectronicCertificateRefundArticle&gt;**](ElectronicCertificateRefundArticle.md) | Корзина возврата (в терминах НСПК) — список возвращаемых товаров, для оплаты которых использовался электронный сертификат. Данные должны соответствовать товарам из одобренной корзины покупки (articles в объекте платежа: https://yookassa.ru/developers/api#payment_object). Необходимо передавать только при оплате на готовой странице ЮKassa: https://yookassa.ru/developers/payment-acceptance/integration-scenarios/manual-integration/other/electronic-certificate/ready-made-payment-form. | [optional] [default to undefined]

## Example

```typescript
import { ElectronicCertificateRefundMethodData } from 'yookassa-client';

const instance: ElectronicCertificateRefundMethodData = {
    electronic_certificate,
    articles,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
