# ElectronicCertificatePaymentData

Данные от ФЭС НСПК для оплаты по электронному сертификату. Неоходимо передавать только при оплате со сбором данных на вашей стороне: https://yookassa.ru/developers/payment-acceptance/integration-scenarios/manual-integration/other/electronic-certificate/merchant-payment-form.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**MonetaryAmount**](MonetaryAmount.md) | Сумма, которую необходимо использовать по электронному сертификату, — значение totalCertAmount, которое вы получили в ФЭС НСПК в запросе на предварительное одобрение использования сертификата (Pre-Auth): https://www.nspk.ru/developer/api-fes#operation/preAuthPurchase. Сумма должна быть не больше общей суммы платежа (amount). | [default to undefined]
**basket_id** | **string** | Идентификатор корзины покупки, сформированной в НСПК, — значение purchaseBasketId, которое вы получили в ФЭС НСПК в запросе на предварительное одобрение использования сертификата (Pre-Auth): https://www.nspk.ru/developer/api-fes#operation/preAuthPurchase. | [default to undefined]

## Example

```typescript
import { ElectronicCertificatePaymentData } from 'yookassa-client';

const instance: ElectronicCertificatePaymentData = {
    amount,
    basket_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
