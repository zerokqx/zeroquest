# PaymentMethodDataElectronicCertificate

Данные для оплаты по электронному сертификату.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card** | [**CardRequestDataWithCsc**](CardRequestDataWithCsc.md) |  | [optional] [default to undefined]
**electronic_certificate** | [**ElectronicCertificatePaymentData**](ElectronicCertificatePaymentData.md) |  | [optional] [default to undefined]
**articles** | [**Array&lt;ElectronicCertificateArticle&gt;**](ElectronicCertificateArticle.md) | Корзина покупки (в терминах НСПК) — список товаров, которые можно оплатить по сертификату. Необходимо передавать только при оплате на готовой странице ЮKassa: https://yookassa.ru/developers/payment-acceptance/integration-scenarios/manual-integration/other/electronic-certificate/ready-made-payment-form. | [optional] [default to undefined]

## Example

```typescript
import { PaymentMethodDataElectronicCertificate } from 'yookassa-client';

const instance: PaymentMethodDataElectronicCertificate = {
    card,
    electronic_certificate,
    articles,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
