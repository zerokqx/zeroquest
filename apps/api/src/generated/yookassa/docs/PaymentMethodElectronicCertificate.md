# PaymentMethodElectronicCertificate

Оплата по электронному сертификату.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card** | [**BankCardData**](BankCardData.md) | Данные банковской карты «Мир». | [optional] [default to undefined]
**electronic_certificate** | [**ElectronicCertificatePayment**](ElectronicCertificatePayment.md) |  | [optional] [default to undefined]
**articles** | [**Array&lt;ElectronicCertificateApprovedPaymentArticle&gt;**](ElectronicCertificateApprovedPaymentArticle.md) | Одобренная корзина покупки — список товаров, одобренных к оплате по электронному сертификату. Присутствует только при оплате на готовой странице ЮKassa: https://yookassa.ru/developers/payment-acceptance/integration-scenarios/manual-integration/other/electronic-certificate/ready-made-payment-form. | [optional] [default to undefined]

## Example

```typescript
import { PaymentMethodElectronicCertificate } from 'yookassa-client';

const instance: PaymentMethodElectronicCertificate = {
    card,
    electronic_certificate,
    articles,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
