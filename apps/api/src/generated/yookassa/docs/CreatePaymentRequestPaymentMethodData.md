# CreatePaymentRequestPaymentMethodData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**card** | [**CardRequestDataWithCsc**](CardRequestDataWithCsc.md) |  | [optional] [default to undefined]
**phone** | **string** | The user\&#39;s phone number. Sent to the partner and used for authorization in the \&quot;Pay in installments\&quot; service. Maximum 15 characters. Specified in the ITU-T E.164: https://ru.wikipedia.org/wiki/E.164 format. Example: 79000000000. | [default to undefined]
**payment_purpose** | **string** | Назначение платежа (не больше 210 символов). | [default to undefined]
**vat_data** | [**PaymentMethodDataB2bSberbankAllOfVatData**](PaymentMethodDataB2bSberbankAllOfVatData.md) |  | [default to undefined]
**electronic_certificate** | [**ElectronicCertificatePaymentData**](ElectronicCertificatePaymentData.md) |  | [optional] [default to undefined]
**articles** | [**Array&lt;ElectronicCertificateArticle&gt;**](ElectronicCertificateArticle.md) | Корзина покупки (в терминах НСПК) — список товаров, которые можно оплатить по сертификату. Необходимо передавать только при оплате на готовой странице ЮKassa: https://yookassa.ru/developers/payment-acceptance/integration-scenarios/manual-integration/other/electronic-certificate/ready-made-payment-form. | [optional] [default to undefined]

## Example

```typescript
import { CreatePaymentRequestPaymentMethodData } from 'yookassa-client';

const instance: CreatePaymentRequestPaymentMethodData = {
    type,
    card,
    phone,
    payment_purpose,
    vat_data,
    electronic_certificate,
    articles,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
